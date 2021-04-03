import React, {useEffect, useState} from 'react';
import styles from './Bid.module.scss';
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux";
import { setBid } from '../../app/product';
import { setYourBid } from '../../app/user';

const Bid = (props) => {
    const { biddingHistory } = props

    const yourBid = useSelector(state => state.user.user.yourBid);
    const [bidNumber, setBidNumber] = useState('');
    const [afterBid, setAfterBid] = useState(0);
    const dispatch = useDispatch();

    const handleBid = () => {
        const time = moment().toDate();
        dispatch(setBid({ user: 'Your bid', time: time, bidNumber: Number(bidNumber) }));
        dispatch(setYourBid(afterBid));
        setBidNumber(0);

    }
    const handleChange = (event) => {
        setBidNumber(event.target.value);
    }

    useEffect(() => {
        setAfterBid(yourBid - bidNumber);
    }, [bidNumber, yourBid])

    const showError = () => {
        if (bidNumber && bidNumber <= maxBid()) {
            return 'Current bid must be greater than max bid';
        } else if (yourBid < bidNumber) {
            return 'This cannot exceed your bid';
        } else {
            return '';
        }
    }

    const maxBid = () => {
        const data = Math.max.apply(Math, biddingHistory.map(function(o) { return o.bidNumber; }))
        return data
    }

    const autoGetBid = () => {
        setBidNumber(maxBid() + 1);
    }

    const reBackBid = () => {
        setBidNumber('');
    }
    return (
        <div className={styles.Bid}>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <div className="row mb-2">
                            <div className="col-4">
                                <div className="mb-2 fz-600 ">
                                    After Bid
                                    
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mb-2 fz-600 ">
                                    Bid
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mb-2 fz-600 ">
                                    Max Bid
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <div className="d-flex justify-content-between">
                                    <div className="awe-bagged">{afterBid < 0 ? 0 : afterBid}</div>
                                    <div className={styles.GroupButton}>
                                        <button disabled={!bidNumber} className={`btn btn-link ${styles.btnLink}`} onClick={reBackBid}>
                                            <i className="fas fa-caret-left"></i>
                                        </button>
                                        <button  disabled={maxBid() > yourBid} className={`btn btn-link ml-1 ${styles.btnLink}`} onClick={autoGetBid}>
                                            <i className="fas fa-caret-right"></i>
                                        </button>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-4">
                                <div>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        value={bidNumber} 
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="awe-bagged">{maxBid()}</div>
                            </div>
                        </div>
                        
                        <div className={styles.errorMessage}>{showError()}</div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-secondary btn-block"
                                disabled={yourBid < bidNumber || bidNumber <= maxBid()}
                                onClick={() => handleBid()}
                            >Place bid</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-2 fz-600 ">Bidding history</div>
                    <div>
                        {
                            biddingHistory.map((item, key) => (
                                <div className="d-flex flex-row justify-content-between mb-2" key={key}>
                                    <div className="d-flex align-items-center">
                                        <span className="awe-bagged mr-2">{item.bidNumber}</span>
                                        <div>{item.user}</div>
                                    </div>
                                    <div className="time">
                                        {moment(item.time).format('DD/MM-YY hh:mm')}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bid;