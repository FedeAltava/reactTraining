import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

export const CounterApp = ({ value }) => {
    const [valor, setValor] = useState(value)
    const handleAdd = () => {
    setValor((prev)=>prev+1);
  };

  const handleSubstract = () => {
    setValor((prev)=>prev-1);
  };

  const handleReset = () => {
    setValor(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {valor} </h2>
      <button onClick={() => handleAdd()}>+1</button>
      <button onClick={() => handleSubstract()}>-1</button>
      <button aria-label="reset" onClick={() => handleReset()}>Reset</button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number,
};
