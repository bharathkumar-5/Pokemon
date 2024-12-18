import "./styles.css";
import Dropdown from "../src/Dropdown.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button>Previous</button>
      <button>Next</button>
      <Dropdown />
    </div>
  );
}
