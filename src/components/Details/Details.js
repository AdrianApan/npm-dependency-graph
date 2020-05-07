import React from "react"
import { useLocation, useHistory, useParams } from "react-router-dom"
import { Card } from "react-rainbow-components"
import { Message } from "semantic-ui-react"

import "./Details.scss"
import useDetails from "./hooks/useDetails"
import DependecyGraph from "../DependencyGraph"

function Details() {
  const location = useLocation()
  const param = useParams()
  const history = useHistory()
  const packageName = location.state ? location.state.packageName : param.packageName
  const { loading, error, errorMsg, apiData } = useDetails(packageName)

  function handleClick(event) {
    event.preventDefault()
    history.goBack()
  }

  return (
    <Card className="details">
      <a href="/" onClick={(event) => handleClick(event)}>&laquo; Back</a>
      {loading && <p className="loading">Loading...</p>}
      {error && <Message error content={errorMsg} />}
      {apiData &&
        <>
          <h1>{packageName} <span className="version">{apiData.version}</span></h1>
          <p className="description">{apiData.description}</p>
          {apiData.keywords &&
            <ul className="keywords">
              {apiData.keywords.map((tag,i) => <li key={`${tag}-${i}`}>{tag}</li>)}
            </ul>
          }
          <h3 className="dependencies-heading">→ dependencies</h3>
          <DependecyGraph packageName={packageName} />
        </>
      }
    </Card>
  )
}

export default Details