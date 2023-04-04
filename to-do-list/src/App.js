import './App.css';
import React, { useState } from 'react'

function App() {

  // STATE HOOK
  const [newItem, setNewItem] = useState(null)  
  
  return (
    <div className="App">
      {/* { Header } */}

      <h1>To-Do List App</h1>

      {/* {INPUT AND BUTTON} */}


      <input 
      type='text'
      placeholder="Add item here"
      value={newItem}
      onChange= {e => setNewItem(e.target)}
      />

      <button>Add Item</button>



    </div>
  );
}

export default App;
