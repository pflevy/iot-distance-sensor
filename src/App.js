import React, { useState, useEffect } from "react";
import "./styles.css";
import Canvas from "./canvas";
import firebase from "./firebase";

const App = () => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const getValue = firebase.database().ref("distancia");
    getValue.on("value", snapshot => {
      let value = snapshot.val();
      setDistance(value.toFixed(2));
    });
  }, []);

  return (
    <div className="litreDisplay">
      <div className="canvas">
        <Canvas distance={distance} />
      </div>
      <div className="displayValue">
        <span>{distance}cm</span>
      </div>
    </div>
  );
};

export default App;
