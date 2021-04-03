import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const {
        handleOpenMenu
    } = props
    return (
        <header className={styles.Header}>
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className={styles.logo}>
                        <div>Awesome Group</div>
                    </Link>
                    <div className="d-md-none d-block">
                        <button className={`btn btn-link ${styles.buttonBar}`} onClick={() => handleOpenMenu()}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;