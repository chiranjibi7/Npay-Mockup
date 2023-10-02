import React from "react";
import Topbar from "../../shared/ui/Topbar";
import VisaDirect from "../../images/VISADIRECT.jpg";
import "./confirmation.css";
import Visa from "../../images/visa-card.jpg";
import Switch from "../../images/switch.jpg";

export default function Confirmation() {
  return (
    <div className="confirmation">
      <Topbar icon={true} text="Confirmation" />
      <div className="visa-img">
        <img src={VisaDirect} width={60} height={60} />
      </div>
      <p className="wallet-text">Your account has been connected.</p>

      <div className="card-group">
        <img
          src={Visa}
          width={258}
          height={163}
          className="visa-card-hidden1"
        />
        <img src={Visa} width={258} height={163} className="visa-card" />
        <img
          src={Visa}
          width={258}
          height={163}
          className="visa-card-hidden2"
        />
      </div>

      <div className="payout-method">
        <p>Preffered payout method</p>
        <img src={Switch} />
      </div>

      <div className='btn-wrapper' style={{marginTop:"186px"}}>
            <div className='btn-primary' style={{background:"#47C78F"}}>
                <p className='btn-continue'>CONFIRM</p>
            </div>
        </div>

    </div>
  );
}
