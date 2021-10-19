import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout } from 'components'
import { Home, Search, Artist } from 'views'

import './App.module.css'

const App = () => (
  <Layout>
    <Switch>
      <Route path="/artist/:id">
        <Artist />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Layout>
)

export default App
