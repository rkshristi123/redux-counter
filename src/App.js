import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import { add, division, multiplication, subtract } from './store/action';
import { useState } from 'react';


function App() {
  const [inpvalue,setInpvalue] =useState("")
 
  const dispatch = useDispatch()
  const count=useSelector((state)=>state.count)

  const handlechange=(e)=>{
      console.log(e)
      setInpvalue(e.target.value)
      
  }
  return (
    <div className="App">
    <h1>counter: {count}</h1>
    <button onClick={()=>dispatch(multiplication(inpvalue))}>*</button>
    <button onClick={()=>dispatch(add(inpvalue))}>+</button>
    <input placeholder='type something' type="number" onChange={(e)=>handlechange(e)}/>
    <button onClick={()=>dispatch(subtract(inpvalue))}>-</button>
    <button onClick={()=>dispatch(division(inpvalue))}>/</button>
    </div>
  );
}

export default App;
