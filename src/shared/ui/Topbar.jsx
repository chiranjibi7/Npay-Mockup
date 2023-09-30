import React from 'react';
import "./topbar.css";
import CellularConnection from "../../images/cellular-connection.jpg";
import Wifi from "../../images/Wifi.jpg";
import Battery from "../../images/Battery.jpg";
import Back from "../../images/back.jpg";

function Topbar({icon,text}) {
  return (
    <div className='topbar-container'>
        <div className='status-container'>
            <img id="cellular" src={CellularConnection} width={17} height={10.67}/>
            <img id="wifi" src={Wifi} width={15.27} height={10.97}/>
            <img id="battery" src={Battery} width={24.33} height={11.33}/>
        </div>

        <div className='nav-container'>
              {icon && <img src={Back} id="back" height={24} width={24} />}
              <p id="nav-text">{text}</p>
        </div>
    </div>
  )
}

export default Topbar