import Form from '../Form/Form.js';
import TrickContainer from '../TrickContainer/TrickContainer.js';
import './App.css';
import React, { useEffect, useState } from 'react';



function App() {

  const [tricks, setTricks] = useState([])

  // Get all existing tricks from the API on page load and display them on the DOM. --good


  // things to fix 
    // -> when adding a second card, an error does pop up. i know i am missing a key
  

  const getTricks = ()=> {
    return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if(response.ok) {
        return response
      } else {
        throw new Error('Can not fetch the tricks')
      }
    })
    .then(response => response.json())
    .then(data => setTricks(data))
    .catch(error => console.error(error))
  }

  useEffect(()=> {
    getTricks()
  },[])
  console.log(tricks)

  const addTrick = (newTrick)=> {
    setTricks([...tricks, newTrick])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <div>
        <Form addTrick={addTrick}/>
      </div>
      <div>
        <TrickContainer tricks={tricks}/>
      </div>
    </div>
  );
}

export default App; 
