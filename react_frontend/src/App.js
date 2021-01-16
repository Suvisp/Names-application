import React, { useState, useEffect } from 'react'
import './App.css';
import TotalNames from './components/TotalNames'
import SelectFilter from './components/SelectFilter'
import FilterNames from './components/FilterNames'
import nameService from './services/restclient'

function App() {
  const [names, setNames] = useState([])


  useEffect(() => {
    nameService
      .getAll()
      .then(initialNames => 
        setNames(initialNames)
      )
  }, [])
  console.log('render', names.length, names)

  return (
    <div className="flex-container">
      <SelectFilter style="order: 1" names={names} />
      <TotalNames style="order: 2" names={names} />
      <FilterNames style="order: 3" names={names} />
    </div>
  );
} 

export default App;
