import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import clsx from 'clsx';

import { useSelector } from "react-redux";

const Sidebar = (props) => {
    const {
        isOpen
    } = props

    const user = useSelector(state => state.user.user);

    const menu = [
        {
            title: 'Menu',
            link: '/',
        },
        {
            title: 'Auction',
            link: '/',
            icon: 'fas fa-gavel'
        },
        {
            title: 'Shop',
            link: '/',
            icon: 'fas fa-shopping-cart'
        },
        {
            title: 'logout',
            link: '/',
            icon: 'fas fa-sign-out-alt'
        }
    ]

    return (
        <div className={clsx(styles.Sidebar, isOpen ? 'sidebar-open' : '')}>
            <div className={styles.Profile}>
                <div className={styles.Avatar}>
                    <img src={user.Avatar} alt="avatar" />
                </div>
                <div className={styles.Name}>
                    <h2 className={styles.UserName}>{user.name}</h2>
                    <div className={styles.yourBid}>
                        <span className="awe-bagged mr-3"></span>
                        {user.yourBid}
                    </div>
                </div>
            </div>
            <ul className={styles.Menu}>
                {
                    menu.map((item, key) => (
                        <li key={key}>
                            <i className={item.icon}></i>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar;