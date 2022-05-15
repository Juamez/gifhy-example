import React from 'react'
import './App.css'
import Home from './pages/Home/index'
import SearchResults from './pages/SearchResults/index'
import Detail from './pages/Detail/index'
import Context from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

import { Link, Route } from 'wouter'

export default function App() {
  return (
    <Context.Provider value={{name: 'juan', suscribete: true}}>
      <div className="App">
        <section className='App-content'>
          <Link to="/" >
            <figure className="App-logo">
              <img src="/logo.png" alt="Gifhy logo" />
            </figure>
          </Link>
          <GifsContextProvider>
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
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  )
}
