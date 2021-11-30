import React from 'react';
import './sidebar.css';
import { 
    LineStyle, Timeline, TrendingUp, 
    PersonOutline, AttachMoney, BarChart, 
    MailOutline, DynamicFeed,
    WorkOutline,
    Report
} from '@material-ui/icons';

export default function sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonOutline className="sidebarIcon"/>
                            Users
                        </li>

                        <li className="sidebarListItem">
                            <PersonOutline className="sidebarIcon"/>
                            products
                        </li>

                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Transactions
                        </li>

                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Notifications
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>
                            Mail
                        </li>

                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon"/>
                            Feed back
                        </li>

                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Stuff
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>
                            Manage
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}