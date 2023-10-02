import React from 'react';
import Edit from "../../images/Edit.jpg";

function UserInfo() {
  return (
    <section className='user-info'>
            <img src={Edit} height={14} width={14} /> 
            <div className='user-name'>
                <p className='userinfo-key'>Card Holder Name</p>
                <p className='userinfo-value'>Peter Pan</p>
            </div>
            <div className='user-phone'>
                <p className='userinfo-key'>Phone Number</p>
                <p className='userinfo-value'>+1 (647) 658-9841</p>
            </div>
            <div className='user-address'>
                <p className='userinfo-key'>Address</p>
                <p className='userinfo-value'>379 Deerfield Ave. Toronto,ON,M4H2B2</p>
            </div>
    </section>
  )
}

export default UserInfo