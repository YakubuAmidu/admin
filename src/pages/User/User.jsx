import React from 'react';
import './User.css';
import UserShow1 from '../../img/UserShowImg1.png';
import { 
    CalendarToday, 
    LocationSearching,
     MailOutline, 
     PermIdentity, 
     PhoneAndroid 
    } from '@material-ui/icons';

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
                <div className="userUpdate">Usder Update</div>
            </div>
        </div>
    )
}