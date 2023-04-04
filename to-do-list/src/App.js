import './App.css';
import React, { useState } from 'react'

function App() {

  // STATE HOOK
  const [newItem, setNewItem] = useState(null)  
  
  return (
    <div className="App">
      {/* { Header } */}

      <h1>To-Do List App</h1>

    </div>
  );
}

export default App;
