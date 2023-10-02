import React from "react";
import Cibc from "../../images/CIBC 1.jpg";
import Hsbc from "../../images/HSBC.jpg";
import National from "../../images/National.jpg";
import Tangerine from "../../images/Tangerine.jpg";

function EligibleBanks() {
  return (
    <section className="eligible-banks">
      <p>Eligible Banks</p>
      <img src={Cibc} height={17} width={17} />
      <img src={Hsbc} height={17} width={17} />
      <img src={National} height={17} width={17} />
      <img src={Tangerine} height={17} width={17} />
    </section>
  );
}

export default EligibleBanks;
