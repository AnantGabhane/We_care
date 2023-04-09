import { useEffect } from "react";
import { messaging } from "./firebase";

import { getToken } from "firebase/messaging";

import logo from "./logo.svg";
import "./App.css";

function App() {
  async function reqUserPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      //generate token
      const token = await getToken(messaging, {vapikey: 'BF0kUBeIs-sHdpe3dQApNkzpxgf0_GcumKbN2dm-o5m3zDJPWPdDnQhyzTL1I5UaBgO79RiXR8SweOaeTEU-AgI'});
      console.log( 'Token gen' ,token);
    } else if (permission === "denied") {
      alert("You have denied notification permission");
    }

    //check if user has granted permission
    //if not, then ask for permission
    //if permission granted, then save to indexedDB
  }
  useEffect(() => {
    reqUserPermission();
    //req user for notification permission
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
