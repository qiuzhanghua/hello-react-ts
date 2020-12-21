import React from "react";
import Greeting from "./Greeting";

function App(): JSX.Element {
  return (
    <div>
      <h1>My App</h1>
      <br />
      <Greeting name="邱张华" />
    </div>
  );
}

export default App;
