import logo from "./logo.png";
import "./App.css";
import Find from "./components/Find";
import Map from "./components/Map";
import GroupBy from "./components/GroupBy";
import Merge from "./components/Merge";
import Uniq from "./components/Uniq";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learning Lodash Functions</p>
        <span className="App-link">Open your console.</span>
      </header>
      <Find />
      {/*<Map />*/}
      {/*<GroupBy />*/}
      {/*<Merge />*/}
      {/*<Uniq />*/}
    </div>
  );
}

export default App;
