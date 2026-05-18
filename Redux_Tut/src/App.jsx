import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './Redux/features/CounterSLice';

// useDispatch gives you access to the Redux dispatch function. 
// Its sole job is to send actions to the Redux store to trigger a state change


// useSelector is a hook that allows your React components to read data out of the Redux store.
const App = () => {

  //to send data/order
  const dispatch = useDispatch();

  //to read data from store 
  const count = useSelector((state) => state.counter.value)


  const [num, setNum] = useState(5)

  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => {
          dispatch(increment())
        }}
      >Increment</button>
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >Decrement</button>

      <button 
      onClick={()=>{
        dispatch(incrementByAmount(num))
      }}
      >Incrment by </button>
      
      <input type="number" value={num}
        onClick={(e) => {
          setNum(e.target.value)
        }} />




    </div>
  )
}

export default App
