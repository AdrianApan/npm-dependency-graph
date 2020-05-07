import { useState, useEffect } from "react"
import { useInfiniteScroll } from "react-infinite-scroll-hook"
import axios from "axios"

function useSearch(searchTerm) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [loadTime, setLoadTime] = useState(null)
  const [totalResults, setTotalResults] = useState(null)
  const [results, setResults] = useState(null)
  const [hasNextPage, setHasNextPage] = useState(true)

  const proxy = process.env.REACT_APP_API_PROXY
  const url = process.env.REACT_APP_API_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        // UI bits
        const timerStart = Date.now()
        setLoading(true)
        setResults(null) // clear previous search results

        // API
        const response = await axios(`${proxy}/${url}/-/v1/search?text=${searchTerm}`)
        setResults(response.data.objects)
        setTotalResults(response.data.total)

        // UI bits
        setLoading(false)
        setLoadTime((Date.now() - timerStart) / 1000)

        // Hide infinite scroll loading if no more than 20 results
        response.data.objects.length < 20 && setHasNextPage(false)
      } catch (error) {
        setError(true)
        setErrorMsg("We cannot fetch the data at the moment. Please try again later.")
        setLoading(false)
        setHasNextPage(false)
      }
    }

    if (searchTerm !== "") {
      fetchData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  // Infinite scroll
  async function loadItems(prevResults = [], startCursor = 20) {
    const response = await axios(`${url}/-/v1/search?text=${searchTerm}&from=${startCursor}`)
    return new Promise(resolve => {
      setTimeout(() => {
        let newResults = []
        
        // For every 20 new items
        for (let i = startCursor; i < startCursor + 20; i++) {
          if (response.data.objects.length > 0) {
            // Concat existing results array with new array of items
            newResults = [...prevResults].concat(response.data.objects)
          } else {
            // If no new items, keep existing array and disable infinite scroll
            newResults = [...prevResults]
            setHasNextPage(false)
          }
        }

        resolve(newResults)
      }, 1000)
    })
  }

  function handleLoadMore() {
    setLoading(true)
    loadItems(results, results.length).then(newResults => {
      setLoading(false)
      setResults(newResults)
    })
  }

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: handleLoadMore,
    scrollContainer: "window"
  })

  return {
    loading,
    error,
    errorMsg,
    loadTime,
    totalResults,
    results,
    infiniteRef,
    setHasNextPage
  }
}

export default useSearch