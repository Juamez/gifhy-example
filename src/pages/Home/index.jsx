import React, { useState } from 'react';
import { useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/listOfGifs'
import {useGifs} from '../../hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'

export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()

  const handleSubmit = event => {
    event.preventDefault()

    pushLocation(`/search/${keyword}`)
  }

  const handleChange = event => {
    setKeyword(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input onChange={handleChange} placeholder="Enter a keyword ..." type="text" value={keyword}/>
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className='App-title'>Ultima Busqueda</h3>
          <ListOfGifs gifs={gifs}/>
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}