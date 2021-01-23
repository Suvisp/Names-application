import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
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
    <div className="App">
      <Navigation />
      <div className="Content">
        <Switch>
          <Route path="/selectfilter">
            <SelectFilter names={names} />
          </Route>
          <Route path="/totalnames">
            <TotalNames names={names} />
          </Route>
          <Route path="/filternames">
            <FilterNames names={names} />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
