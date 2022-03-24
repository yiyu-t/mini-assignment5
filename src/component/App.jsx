import Box from "./Box";
import './App.css';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

export default function App() {

const count = useSelector((state) => {
  return state.sum
}, shallowEqual);

useEffect(() => [count]);

  return (
    <div>
      <h2>Count: &nbsp; {count}</h2>
      <div className="cubes">
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}