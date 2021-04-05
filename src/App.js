import logo from "./logo.svg";
import "./App.css";
import ParentWrapper from "./ParentWrapper";

function App() {
  const maxSize = 100;
  const step = 10;
  return <ParentWrapper maxSize={maxSize} step={step} />;
}

export default App;
