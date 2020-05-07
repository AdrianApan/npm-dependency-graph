import React from "react"
import Graph from "react-graph-vis"
import { Loader, Message } from "semantic-ui-react"

import "./DependencyGraph.scss"
import { isEmpty } from "../../utils"
import useDependencyGraph from "./hooks/useDependencyGraph"
import { options } from "./DepedencyGraphOptions"

function DependencyGraph({packageName}) {
  const {
    loading,
    progress,
    error,
    errorMsg,
    graph,
  } = useDependencyGraph(packageName)

  return (
    <div className="dependecy-graph">
      {
        loading &&
        <Loader
          indeterminate
          active
          inline="centered"
          content={`Remaining packages: ${progress}`}
          style={{margin: "20px 0"}}
        />
      }

      { error && <Message error content={errorMsg} /> }

      {
        !isEmpty(graph) &&
        <Graph graph={graph} options={options}/>
      }
    </div>
  )
}

export default DependencyGraph