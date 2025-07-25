import Componentfunction from "./Componentfunction";
import Greeting from "./Greeting";
import Javascript from "./Javascript";
import Props from "./Props";
import State from "./State";

function App() {
  return (
    <div>
      <h1>Hello,React!</h1>
       <hr/>
      <Javascript/>
      <Greeting myname="sunil"/>
      <Componentfunction/>
      <Props location="Ahmedabad"/>
      <State/>
    </div>
  );
}

export default App;

