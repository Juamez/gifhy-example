import React from 'react'
import './App.css'
import Home from './pages/Home/index'
import SearchResults from './pages/SearchResults/index'
import Detail from './pages/Detail/index'
import Context from './context/StaticContext'

import { Link, Route } from 'wouter'

function App() {
  return (
    <Context.Provider value={{name: 'juan', suscribete: true}}>
      <div className="App">
        <section className='App-content'>
          <h1>Links</h1>
          <Link to="/gif/panda">Gifs de pandas</Link>
          <Link to="/gif/doom">Gifs de doom</Link>
          <Link to="/gif/shih-Tzu">Gifs de shih-Tzu</Link>
          <Link to="/gif/pug">Gifs de pugs</Link>
          <Route 
            component={Home} 
            path='/' 
          />
          <Route 
            component={SearchResults} 
            path='/search/:keyword' 
          />
          <Route 
            component={Detail} 
            path='/gif/:id' 
          />
        </section>
      </div>
    </Context.Provider>
  )
}

export default App
