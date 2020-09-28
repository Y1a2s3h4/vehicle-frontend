import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => value + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="countUp_box">
      <h1>{value}</h1>
    </div>
  );
}
