import React from 'react';
import './UserList.css';
//import Userlist1 from '../../img/userlist1.png';
import { DataGrid } from '@mui/x-data-grid';

export default function UserList(){
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className="userListUser">
                 <img src={params.row.avatar} alt="avatar" />
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
        }
      ];

      const rows = [
        { 
            id: 1, 
            username: 'Jon Snow', 
            avatar: "../../img/userlist1.png", 
            email: "Jon@gmail.com", 
            status: "Active", 
            transaction: "$120.00" 
        },

        { 
            id: 2, 
            username: 'Jon Snow', 
            avatar: "../../img/userlist1.png", 
            email: "Jon@gmail.com", 
            status: "Active", 
            transaction: "$120.00" 
        },

        { 
            id: 3, 
            username: 'Jon Snow', 
            avatar: "../../img/userlist1.png", 
            email: "Jon@gmail.com", 
            status: "Active", 
            transaction: "$120.00" 
        },

        { 
            id: 4, 
            username: 'Jon Snow', 
            avatar: "../../img/userlist1.png", 
            email: "Jon@gmail.com", 
            status: "Active", 
            transaction: "$120.00" 
        },

        { 
            id: 5, 
            username: 'Jon Snow', 
            avatar: "../../img/userlist1.png", 
            email: "Jon@gmail.com", 
            status: "Active", 
            transaction: "$120.00" 
        },

        { 
            id: 6, 
            username: 'Jon Snow', 
            avatar: "../../img/userlist1.png", 
            email: "Jon@gmail.com", 
            status: "Active", 
            transaction: "$120.00" 
        },

        { 
            id: 7, 
            username: 'Jon Snow', 
            avatar: "../../img/userlist1.png", 
            email: "Jon@gmail.com", 
            status: "Active", 
            transaction: "$120.00" 
        },

        { 
            id: 8, 
            username: 'Jon Snow', 
            avatar: "../../img/userlist1.png", 
            email: "Jon@gmail.com", 
            status: "Active", 
            transaction: "$120.00" 
        },

        { 
            id: 9, 
            username: 'Jon Snow', 
            avatar: "../../img/userlist1.png", 
            email: "Jon@gmail.com", 
            status: "Active", 
            transaction: "$120.00" 
        },

        { 
            id: 10, 
            username: 'Jon Snow', 
            avatar: "../../img/userlist1.png", 
            email: "Jon@gmail.com", 
            status: "Active", 
            transaction: "$120.00" 
        },
      ];
      

    return (
        <div className="userList">
       <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}