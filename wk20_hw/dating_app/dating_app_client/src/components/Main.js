  
import React from "react";
import Daters from "./Hello.js";

function Main(props) {
  console.log(props);
  const { handleUpdate, handleDelete, notices } = props;
  return (
    <main>
      <h1>main content goes here</h1>
    </main>
  );
}

export default Main;