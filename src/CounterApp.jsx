import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [valor, setValor] = useState(value);
  const handleAdd = () => {
    setValor((prev) => prev + 1);
  };
  const handleSub = () => {
    setValor((prev) => prev - 1);
  };
  const handleReset = () => {
    setValor(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {valor} </h2>
      <button onClick={() => handleAdd()}>+1</button>
      <button onClick={() => handleSub()}>-1</button>
      <button onClick={() => handleReset()}>reset</button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number,
};
