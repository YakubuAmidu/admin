import React from 'react';
import './Product.css';
import productInfoImg1 from '../../img/productInfoImg1.png';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/chart';
import { ProductData } from '../../dummyData';

export default function Product(){
  return (
  <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
         <Chart data={ProductData} datakey="Sales" title="Sales performance" grid/>
         </div>

        <div className="productTopRight">
          <div className="productInfoTop">
           <im src={productInfoImg1} alt="" className="productInfoImg" />
           <span className="productName">Apple Airpod</span>
          </div>
          <div className="productInfoBottom">
           <div className="productInfoItem">
             <span className="productInfoKey">id:</span>
             <span className="productInfoValue">123</span>
           </div>

           <div className="productInfoItem">
             <span className="productInfoKey">sales:</span>
             <span className="productInfoValue">5123</span>
           </div>

           <div className="productInfoItem">
             <span className="productInfoKey">active:</span>
             <span className="productInfoValue">yes</span>
           </div>

           <div className="productInfoItem">
             <span className="productInfoKey">in stock</span>
             <span className="productInfoValue">no</span>
           </div>
          </div>
        </div>
      </div>

      <div className="productButton">

      </div>
  </div>
  )
}