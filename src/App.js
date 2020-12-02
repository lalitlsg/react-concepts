import logo from "./logo.svg";
import "./App.css";
import JSXExample from "./components/basics/JSXExample";
import PropsFunctional from "./components/basics/PropsFunctional";
import PropsClass from "./components/basics/PropsClass";
import Counter from "./components/basics/Counter";
import EventExample from "./components/event/EventExample";
import MethodProp from "./components/method-prop/MethodProp";
import ParentMethodProp from "./components/method-prop/ParentMethodProp";

function App() {
  return (
    <div className="App">
      {/* <JSXExample /> */}
      {/* 
      <PropsFunctional name="Props Functional">
        <h1>Hi</h1>
      </PropsFunctional> */}

      {/* <PropsClass name="Props Class">
        <h1>Hi</h1>
      </PropsClass>

      <Counter /> */}
      {/* <EventExample /> */}

      <ParentMethodProp />
    </div>
  );
}

export default App;
