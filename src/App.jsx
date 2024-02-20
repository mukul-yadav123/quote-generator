import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const[advice,setAdvice] = useState('');

  useEffect(() => {
   fetchAdvice();
  },[])

  const fetchAdvice = async() => {
  const {data: {slip: {advice}}} = await axios.get(`https://api.adviceslip.com/advice`);
  // console.log(advice);
  setAdvice(advice);
  }

  return (
    <>
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className='button' onClick={fetchAdvice}>
          <span>
            GIVE ME ADVICE!!
          </span>
        </button>
      </div>
    </div>
    </>
  )
}

export default App
