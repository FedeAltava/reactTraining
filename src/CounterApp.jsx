import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value)
    const handleClick = () => {
        setCounter(( prev ) => prev + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={() => handleClick()}>+1</button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number,
};
