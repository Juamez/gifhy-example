import { useState, useEffect } from 'react'
import getGifs from '../service/getGifs'

export default function useGifs({ keyword } = {keyword: null}) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

  return {loading, gifs}
}