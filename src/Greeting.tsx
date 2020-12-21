import React from "react";
const Greeting = (x: { name: string }): JSX.Element => <div>Hello,{x.name}!</div>;
export default Greeting;
