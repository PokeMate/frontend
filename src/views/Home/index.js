import React from "react";
import logo from "./PokeMate.png";

export default function Home() {
  return (
    <div className="content">
      <img src={logo} alt="" style={{
        maxWidth: "100%", height: "auto"
      }}/>
      <p>version_1.0</p>
    </div>
  );
}
