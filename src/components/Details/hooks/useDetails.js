import { useState, useEffect } from "react"
import axios from "axios"

function useDetails(packageName) {
  const [apiData, setApiData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const proxy = "https://morning-cove-30121.herokuapp.com"
  const url = "http://registry.npmjs.org"
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios(`${proxy}/${url}/${packageName}`)
  
        // Get latest version from response » data » dist-tags » latest
        const version = response.data && Object.entries(response.data)
          .map(([key, value]) => key === "dist-tags" ? value.latest : null)
          .filter(item => item !== null)
          .toString()
  
        // Get latest version details from response » versions
        const data = response.data && Object.entries(response.data.versions).filter(([key, value]) => key === version)[0][1]
        setApiData(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setErrorMsg("We cannot fetch the data at the moment. Please try again later.")
        setLoading(false)
      }
    }
    fetchData()
  }, [packageName])
  
  return {
    loading,
    error,
    errorMsg,
    apiData
  }
}

export default useDetails