import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/chart';
import { ProductData } from '../../dummyData';
import productUploadInfoImg1 from '../../img/userUpdate.png';
import productUploadImg from '../../img/userUpdate.png';
import { Publish } from '@material-ui/icons';

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
           <im src={productUploadInfoImg1} alt="" className="productInfoImg" />
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
         <form className="productForm">
           <div className="productFormLeft">
             <label>Product Name</label>
             <input type="text" placeholder="Apple Airpods" className="productInput" />
             <label>In stock</label>
             <select name="inStock" id="inStock">
               <option value="yes">Yes</option>
               <option value="no">No</option>
             </select>

             <label>Active</label>
             <select name="active" id="active">
               <option value="yes">Yes</option>
               <option value="no">No</option>
             </select>
           </div>

           <div className="productFormRight">
             <div className="productUpload">
               <img src={productUploadImg} alt="" className="productUploadImg" />
               <label for="file">
                 <Publish />
               </label>
               <input type="file" id="file" style={{ display: 'none' }} />
             </div>
             <button className="productButton">Update</button>
             </div>
         </form>
      </div>
  </div>
  )
}