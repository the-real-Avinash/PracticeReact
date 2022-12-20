import "./App.css";
import { useState } from "react";
import Main from "./Main";
import Person from "./Person";

function App() {
  const [displayName, setDisplayName] = useState(true);
  // console.log(displayName);
  const name = "Abhijeet";
  return (
    <div className="App">
      {/* <h1>Hello App</h1> */}
      {/* {displayName ? <h1>Hello Avinash</h1> : ""} */}

      <Main
        name={name}
        displayName={displayName}
        setDisplayName={setDisplayName}
      />
      <Person name="Avinash" age={22} designation="SDE-1" />
    </div>
  );
}

export default App;
