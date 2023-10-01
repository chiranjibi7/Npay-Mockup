import { WithdrawalMethod, CardFieldInformation, CardExpiryInformation, VisadirectWithdrawal, CardErrorModal } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="app">
       <CardErrorModal/>
       <WithdrawalMethod/>
       <CardFieldInformation/>
       <CardExpiryInformation/>
       <VisadirectWithdrawal/>
    </div>
  );
}

export default App;
