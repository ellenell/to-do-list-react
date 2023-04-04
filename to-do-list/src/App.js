import './App.css';
import React, { useState } from 'react'

function App() {

  // STATE HOOK
  const [newItem, setNewItem] = useState('')
  const [items, setItmes] = useState([])  

  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000), 
      value: newItem
    }

    setItmes(oldList => [...oldList, item])

    setNewItem('')
  console.log(newItem)
  }
  
  return (
    <div className="App">
      {/* { Header } */}

      <h1>To-Do List App</h1>

      {/* {INPUT AND BUTTON} */}


      <input 
      type='text'
      placeholder="Add item here"
      value={newItem}
      onChange= {e => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add Item</button>



    </div>
  );
}

export default App;
