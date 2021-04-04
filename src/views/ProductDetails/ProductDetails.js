import classes from './ProductDetails.module.scss';
import moment from 'moment';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import ImageGallery from 'react-image-gallery';
import { getProduct } from '../../app/product';

import Bid from '../../components/bid/bid';

function ProductDetails () {
    let { slug } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.product)
    const biddingHistory = useSelector(state => state.products.bid.biddingHistory)

    useEffect(() => {
        dispatch(getProduct(slug))
    }, [dispatch, slug])

  return (
    <div className={classes.ProductDetails}>
        
        <div className="row">
            <div className="col-md-5 col-12 mb-3">
                {
                    product.gallery && (
                        <ImageGallery items={product.gallery} showFullscreenButton={false} showPlayButton={false} additionalClass="awe-gallery"/>
                    )
                }
            </div>
            <div className="col-md-7 col-12">
                <div className={classes.ProductTopWrapper}>
                    <div className={classes.ProductTop}>
                        <div className={classes.icon}>
                            {
                                product.logo && (
                                    <img src={product.logo} alt="logo" />
                                )
                            }
                        </div>
                        <div>
                            <h2 className={classes.ProductTitle}>{product.title}</h2>
                            <div className={classes.Time}>{moment(product.updated, 'DD/MM/YYYY').fromNow()}</div>
                        </div>
                    </div>
                    <p>
                        {product.description}
                    </p>
                </div>
                <Bid biddingHistory={biddingHistory} />
            </div>
        </div>
    </div>
  );
}

export default ProductDetails;
