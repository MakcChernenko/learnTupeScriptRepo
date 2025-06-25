import "./style.css";
import Task1 from "./task1";
import SwapValues from "./SwapValues";

Task1();

function App() {
  return (
    <div>
      <SwapValues a={10} b={5} />
    </div>
  );
}
export default App;
