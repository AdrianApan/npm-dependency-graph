import React from "react"
import { Card } from "react-rainbow-components"
import { Link } from "react-router-dom"
import { v1 as uuidv1 } from "uuid"

import "./Item.scss"

function Items({data}) {
  const {name, description, version, keywords} = data.package
  
  return (
    <Link to={{
      pathname: `/${name}`,
      state: { packageName: name }
    }}>
      <Card className="item" >
        <h3>
          {name}
          <span className="version"> {version}</span>
          {data.searchScore > 1 && <div className="exact-match">exact match</div>}
        </h3>
        <p className="description">{description}</p>
        {keywords &&
          <ul className="keywords">
            {keywords.map(tag => <li key={uuidv1()}>{tag}</li>)}
          </ul>
        }
      </Card>
    </Link>
  )
}

export default Items
