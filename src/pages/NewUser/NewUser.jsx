import React from 'react';
import './NewUser.css';

export default function NewUser(){
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="John" className="usernameInput" />
                </div>

                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" className="usernameInput" />
                </div>

                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" className="usernameInput" />
                </div>

                <div className="newUserItem">
                 <label>Phone</label>
                 <input type="phone" placeholder="+1 234 567 890" className="newUserInput" />
                </div>

                <div className="newUserItem">
                 <label>Address</label>
                 <input type="address" placeholder="+1 1234 567 8922" className="newUserInput" />
                </div>

                <div className="newUserItem">
                 <label>Password</label>
                 <input type="password" placeholder="Password" className="newUserInput" />
                </div>

                <div className="newUserItem">
                    <label>Confirm password</label>
                    <input type="password" placeholder="Confirm password" className="newUserInput" />
                </div>

                <div className="newUserItem">
                <label>Gender</label>
                 <div className="newUserGender">
                  <input type="radio" name="gender" id="male" value="male" className="newUserInput" />
                  <label for="male">Male</label>
                 <input type="radio" name="gender" id="female" value="female" className="newUserInput" />
                 <label for="female">Female</label>
                 <input type="radio" name="gender" id="other" value="other" className="newUserInput" />
                 <label for="other">Other</label>
                 </div>
                </div>

                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                     <option value="yes">Yes</option>
                     <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    );
}