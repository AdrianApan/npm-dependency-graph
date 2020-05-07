import React, { useState, useEffect } from "react"
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import { v1 as uuidv1 } from "uuid"
import ScrollToTop from "react-scroll-up"
import { Form, Input, Button, Message, Icon } from "semantic-ui-react"
import { Card } from "react-rainbow-components"

import "./Search.scss"
import { scrollStyles } from "./SearchStyles"
import useSearch from "./hooks/useSearch"
import Item from "../Item"
import Details from "../Details"

function Search() {
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")
  const {
    loading,
    error,
    errorMsg,
    loadTime,
    totalResults,
    results,
    infiniteRef,
    setHasNextPage
  } = useSearch(query)

  const location = useLocation()
  const history = useHistory()
  
  // Routing
  useEffect(() => {
    if (location.state) {
      setSearch(location.state.referrer)
      setQuery(location.state.referrer)
    } else {
      setSearch(query)
    }

    if (location.search) {
      setSearch(location.search.split("=")[1])
      setQuery(location.search.split("=")[1])
    } else {
      setSearch(query)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, location.search])
  
  function handleChange(event) {
    const {value} = event.target
    setSearch(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    history.push({
      pathname: "/",
      search: `?q=${search}`,
      state: { referrer: search }
    })
    setHasNextPage(true)
  }

  return (
    <>
      <Card className="search">
        <Form onSubmit={event => handleSubmit(event)} className="search-form" error={error}>
          <Input
            action={
              <Button primary type="submit" className="search-button">Search</Button>
            }
            fluid
            size="large"
            icon="search"
            iconPosition="left"
            type="text"
            value={search}
            placeholder="enter npm package name"
            className="search-input"
            onChange={event => handleChange(event)}
          />
          <Message
            error
            content={errorMsg}
          />
        </Form>
      </Card>
      
      <Switch>
        <Route exact path="/">
          {results &&
            <>
              <p className="stats">Found {totalResults} results ({loadTime} seconds)</p>
              <div className="results" ref={infiniteRef}>
                {
                  results.length > 0 ?
                    results.map(item => <Item key={uuidv1()} data={item}></Item>) :
                    <Card className="no-results"><p>No results found.</p></Card>
                }
              </div>
            </>
          }
          {loading && <p className="loading">Loading...</p> }
        </Route>
        <Route path="/:packageName">
          <Details />
        </Route>
      </Switch>
      
      <ScrollToTop showUnder={480} style={scrollStyles}>
        <Icon name="angle double up" className="scroll" />
      </ScrollToTop>
    </>
  )
}

export default Search