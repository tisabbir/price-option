import "./App.css";
import DaisyNav from "./components/Daisy-Nav/DaisyNav";
import Hello from "./components/HelloWorld/Hello";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <div>
      <DaisyNav></DaisyNav>
      <Navbar></Navbar>
      <Hello></Hello>
      <PriceOptions></PriceOptions>
    </div>
  );
}

export default App;
