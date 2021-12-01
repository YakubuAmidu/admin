import React from 'react';
import './User.css';
import UserShow1 from '../../img/UserShowImg1.png';

export default function User(){
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit</h1>
                <button className="userAddButton">Create</button>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={UserShow1} alt="" className="userShowImg" />
                        <div className="userShowTitle">
                          <span className="userShowUsername">Anna Manny</span>
                          <span className="userShowTopTitle">Software engineer</span>
                         </div>
                    </div>
                    <div className="userShowBottom">

                    </div>
                </div>
                <div className="userUpdate">Usder Update</div>
            </div>
        </div>
    )
}