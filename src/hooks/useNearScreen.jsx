import { useEffect, useState, useRef } from 'react'

export default function useNearScreen ({ distance = '100px' } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef(null)

  useEffect(() => {
    let observer

    const onChange = (entries, observer) => {
      const el = entries[0]
      if(el.isInteracting){
        setShow(true)
        observer.disconnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })

      observer.observer(fromRef.current)
    })

    return () => observer && observer.disconnect()
  })

  return {isNearScreen, fromRef}
}