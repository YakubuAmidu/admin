import React from 'react';
import './Product.css';
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

          </div>
          <div className="productInfoBottom">
            
          </div>
        </div>
      </div>

      <div className="productButton">

      </div>
  </div>
  )
}