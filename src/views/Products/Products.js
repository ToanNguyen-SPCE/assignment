import classes from './Products.module.scss';
import { useSelector } from "react-redux";
import moment from 'moment';

import {
    Link
  } from "react-router-dom";

function Products () {
    const products = useSelector(state => state.products.products)
  return (
    <div className={classes.Products}>
        <h2 className={classes.ProductsTitle}>Products</h2>
        <div className="row">
            {
                products.map((item, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" key={index}>
                        <div className={classes.Product}>
                            <div className={classes.ProductImages}>
                                <img src={item.urlImg} alt="" />
                            </div>
                            <div className={classes.blockContent}>
                                <div className={classes.icon}>
                                    {
                                        item.logo && (
                                            <img alt="logo" src={item.logo} />
                                        )
                                    }
                                </div>
                                <div className={classes.contentDetails}>
                                    <Link to={`/product/${index}`}  className={classes.ProductTitle}>{item.title}</Link>
                                    <div className={classes.Time}>{moment(item.updated, 'DD/MM/YYYY').fromNow()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Products;
