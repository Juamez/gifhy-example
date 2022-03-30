import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/listOfGifs'
import useGifs from '../../hooks/useGifs'
import Spinner from '../../components/spinner/spinner'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })
  return <>
    {loading
      ? <Spinner />
      : <ListOfGifs gifs={gifs} />
    }
  </>
}