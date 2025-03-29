import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

export const CounterApp = ({ value }) => {
    const [valor, setValor] = useState(value)
    const handleClick = () => {
    setValor((prev)=>prev+1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {valor} </h2>
      <button onClick={() => handleClick()}>+1</button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number,
};
