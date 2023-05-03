import React, { useState } from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Basket from './components/Basket';
import './App.css';


function App() {
  const [favourites, setFavourites] = useState();
  const fetchFavourites = async () => {
    const result = await fetch('/api');
    const data = await result.json();
    setFavourites(data.favourites);
  }

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <HomePage 
              fetchFavourites={fetchFavourites}
              favourites={favourites}
            />
          </Route>
          <Route path='/favourites'>
            <Basket 
              fetchFavourites={fetchFavourites}
              favourites={favourites}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
