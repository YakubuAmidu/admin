import React from 'react';
import './UserList.css';
//import avatar from '../../img/userlist1.png';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { UserRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList(){
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className="userListUser">
                 <img className="userListImg" src={params.row.avatar} alt="" />
                 {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volumne',
            width: 160
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={'/users ' + params.row.id}>
                    <button className="deleteListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete"/>
                    </>
                )
            }
        }
      ];

    return (
        <div className="userList">
       <DataGrid
        rows={UserRows}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}