import React, { useEffect, useState } from "react";


function App() {
  const [difference, setDifference] = useState("");
  const countDate = () => {
    const date_1 = new Date("09/05/2022");
    const date_2 = new Date();
    const diff = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.ceil(diff / (1000 * 3600 * 24));
    setDifference(TotalDays);
  };

  useEffect(() => {
    countDate();
  }, []);

  return (
    <div className="App">
      <div className="box-center">
        <div className="block-1">
          <h2>DIAS</h2>
          <h2>SIN</h2>
        </div>
        <div className="block-2">
          <h1>REFORMAR</h1>
        </div>
        <div className="block-3">{difference}</div>
      </div>
      <video className="videobg" loop autoPlay muted>
        <source src="./video/video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default App
