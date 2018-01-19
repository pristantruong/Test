import React from 'react'
import './App.css';
import Demo from './source1'
import {render} from 'react-dom'

const demo = () => {  
  return(
    <div>
      <Demo />
      <h1>hi</h1>
      <input type = "text" placeholder ="Type" ref = "input1"></input>
    </div>
  );
}
 export default demo




