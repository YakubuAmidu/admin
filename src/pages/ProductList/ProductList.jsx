import React, { useState } from 'react';
import './ProductList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { ProductRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function ProductList(){
    const [data, setData] = useState(ProductRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => 
            item.id !== id ));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {  
           field: 'product', 
           headerName: 'Product', 
           width: 200, 
           renderCell: (params) => {
            return (
                <div className="productListUser">
                 <img className="productListImg" src={params.row.img} alt="img" />
                 {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={'/product/ ' + params.row.id}>
                    <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];


    return (
        <div className="productList">
            <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}