import React from 'react';
import './NewProduct.css';

export default function NewProduct(){
    return (
        <div className="newProduct">
         <h1 className="newProductTitle">New Product</h1>
           <form className="newProductForm">
             <div className="addNewProductItem">
              <label>Image</label>
              <input type="file" id="file" />
             </div>

             <div className="addNewProductItem">
              <label>Name</label>
              <input type="text" placeholder="Apple Airpod" />
             </div>

             <div className="addNewProductItem">
              <label>Stock</label>
              <input type="text" placeholder="123" />
             </div>

             <div className="addNewProductItem">
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
             </div>
             <button className="addNewProductButton">Create</button>
            </form>
        </div>
    )
}