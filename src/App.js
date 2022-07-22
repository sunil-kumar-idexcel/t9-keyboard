import "./App.css";
import Buttons from "./components/Buttons";
import { useState, memo } from "react";

function App() {
  const [value, setValue] = useState("");
  const [isUpperCase] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        width: "20%",
        margin: "auto",
        flexDirection: "column",
        marginTop: "10%",
      }}
    >
      <input type="text" value={value} onChange={() => {}} />
      <br />
      <Buttons setValue={setValue} isUpperCase={isUpperCase}/>
    </div>
  );
}

export default memo(App);
