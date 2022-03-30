import React, { useState } from 'react';
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/listOfGifs';
import useGifs from '../../hooks/useGifs'

const POPULAR_GIFS = ['Ahri', 'Akali', 'pyke', 'jhin', 'Shih Tzu']

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
        <input onChange={handleChange} placeholder="Enter a keyword ..." type="text" value={keyword}/>
        <button>Buscar</button>
      </form>
      <ListOfGifs gifs={gifs}/>
      <h3 className='App-title'>Los gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => {
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        })}
      </ul>
    </>
  )
}