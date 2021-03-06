import logo from "./logo.svg";
import "./App.css";
import JSXExample from "./components/basics/JSXExample";
import PropsFunctional from "./components/basics/PropsFunctional";
import PropsClass from "./components/basics/PropsClass";
import Counter from "./components/basics/Counter";
import EventExample from "./components/event/EventExample";
import MethodProp from "./components/method-prop/MethodProp";
import ParentMethodProp from "./components/method-prop/ParentMethodProp";
import Login from "./components/cond-render/Login";
import List from "./components/lists/List";
import Style1 from "./components/styles/Style1";
import Style2 from "./components/styles/Style2";
import "./components/styles/global.css";
import styles from "./components/styles/local.module.css";
import Form from "./components/forms/Form";
import LifeCycleA from "./components/lifecycles/LifeCycleA";
import Parent from "./components/pure-comp/Parent";
import RefComp from "./components/refs/RefComp";
import RefParent from "./components/refs-with-class/RefParent";
import FRParent from "./components/forward-ref/FRParent";
import PortalComp from "./components/portals/PortalComp";
import EBParent from "./components/error-boundry/EBParent";
import GetParent from "./components/hoc/GetParent";
import RParent from "./components/render-props/RParent";

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

      {/* <ParentMethodProp /> */}
      {/* <Login /> */}
      {/* <List /> */}
      {/* <h1 className={styles.name}>Styles Demo</h1>
      <Style1 />
      <Style2 /> */}
      {/* <Form /> */}
      {/* <LifeCycleA name="lalit" /> */}
      {/* <Parent /> */}
      {/* <RefComp /> */}
      {/* <RefParent /> */}
      {/* <FRParent /> */}
      {/* <PortalComp /> */}
      {/* <EBParent /> */}
      {/* <GetParent /> */}
      <RParent />
    </div>
  );
}

export default App;
