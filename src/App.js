import logo from "./logo.svg";
import "./App.css";
import JSXExample from "./components/JSXExample";
import PropsFunctional from "./components/PropsFunctional";
import PropsClass from "./components/PropsClass";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <JSXExample /> */}

      {/* <PropsFunctional name="Props Functional">
        <h1>Hi</h1>
      </PropsFunctional> */}

      {/* <PropsClass name="Props Class">
        <h1>Hi</h1>
      </PropsClass> */}

      <Counter />
    </div>
  );
}

export default App;
