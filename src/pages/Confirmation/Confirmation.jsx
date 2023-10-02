import React from "react";
import Topbar from "../../shared/ui/Topbar";
import { ImgHeader, CardGroup, PayoutMethod, ButtonGroup} from "../../components/Confirmation";
import "./confirmation.css";

export default function Confirmation() {
  return (
    <main className="confirmation">
      <Topbar icon={true} text="Confirmation" />
      <ImgHeader/>
      <CardGroup/>
      <PayoutMethod/>
      <ButtonGroup/>
    </main>
  );
}
