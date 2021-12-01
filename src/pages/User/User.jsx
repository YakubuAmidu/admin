import React from 'react';
import './User.css';
import UserShow1 from '../../img/UserShowImg1.png';
import userUpload from '../../img/userUpdate.png';
import { 
    CalendarToday, 
    LocationSearching,
     MailOutline, 
     PermIdentity, 
     PhoneAndroid,
     Publish
    } from '@material-ui/icons';

import { Link } from 'react-router-dom'

export default function User(){
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
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
                      <span className="userShowTitle">Account details</span>
                      <div className="userShowInfo">
                          <PermIdentity className="userShowIcon" alt="icon" />
                          <div className="userShowInfoTitle">Annabeck99</div>
                      </div>

                      <div className="userShowInfo">
                          <CalendarToday className="userShowIcon" alt="icon" />
                          <div className="userShowInfoTitle">10.12.1999</div>
                      </div>

                      <span className="userShowTitle">Contact details</span>

                      <div className="userShowInfo">
                          <PhoneAndroid className="userShowIcon" alt="icon" />
                          <div className="userShowInfoTitle">+1 234 567 895</div>
                      </div>

                      <div className="userShowInfo">
                          <MailOutline className="userShowIcon" alt="icon" />
                          <div className="userShowInfoTitle">Annabeck99@gmail.com</div>
                      </div>

                      <div className="userShowInfo">
                          <LocationSearching className="userShowIcon" alt="icon" />
                          <div className="userShowInfoTitle">New York | USA</div>
                      </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdatTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                              <label>Username</label>
                              <input type="text" placeholder="Annabeck99" className="userUpdateInput" />
                             </div>

                             <div className="userUpdateItem">
                              <label>Full Name</label>
                              <input type="text" placeholder="Anna Beck" className="userUpdateInput" />
                             </div>

                             <div className="userUpdateItem">
                              <label>Email</label>
                              <input type="text" placeholder="Annabeck99@gmail.com" className="userUpdateInput" />
                             </div>

                             <div className="userUpdateItem">
                              <label>Phone</label>
                              <input type="phone" placeholder="+1 234 567 8906" className="userUpdateInput" />
                             </div>

                             <div className="userUpdateItem">
                              <label>Address</label>
                              <input type="text" placeholder="New York | USA" className="userUpdateInput" />
                             </div>
                        </div>

                        <div className="userUpdateRight">
                          <div className="userUpdateUpload">
                            <img src={userUpload} className="userUpdateImg" alt="" />
                            <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                            <input type="file" id="file" style={{display: 'none'}}/>
                          </div>
                          <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}