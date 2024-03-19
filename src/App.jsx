import "./App.css";
import DaisyNav from "./components/Daisy-Nav/DaisyNav";
import Hello from "./components/HelloWorld/Hello";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <DaisyNav></DaisyNav>
      <Navbar></Navbar>
      <Hello></Hello>
    </div>
  );
}

export default App;
