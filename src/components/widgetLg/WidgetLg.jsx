import React from 'react';
import user1 from '../../img/user1.png';
import './WidgetLg.css';

export default function WidgetLg(){
    const Button = ({ type }) => {
        return (
            <button className={"widgetLgButton " + type}>{type}</button>
        )
    }

    return (
        <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
         <table className="widgetLgTable">
             <tr className="widgetLgTr">
                 <th className="widgetTh">Customer</th>
                 <th className="widgetLgTh">Date</th>
                 <th className="widgetLgTh">Amount</th>
                 <th className="widgetLgTh">Status</th>
             </tr>

             <tr className="widgetLgTr">
                 <td className="widgetLgUser">
                 <img src={user1} alt="User" className="widgetLgImg" />
                 <span className="widgetLgName">Susan Carol</span>
                 </td>

                 <td className="widgetLgDate">2 June 2021</td>
                 <td className="widgetLgAmount">$ 3,444</td>
                 <td className="widgetLgStatus">
                     <Button type="Approved" />
                 </td>
             </tr>
         </table>
        </div>
    )
}