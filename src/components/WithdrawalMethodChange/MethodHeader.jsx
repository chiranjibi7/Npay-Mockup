import React from 'react';
import Information from "../../images/Infomation.jpg";

function MethodHeader() {
  return (
    <>
         <p className='balance-text'>How would you like us to transfer your money?</p>
        <div className='funds'>
            <p>Preffered Method</p>
            <img src={Information} height={20} width={20}/>
        </div>
    </>
  )
}

export default MethodHeader