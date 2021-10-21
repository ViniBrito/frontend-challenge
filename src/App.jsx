import React from 'react'
import { Switch } from 'react-router-dom'

import { Layout, PrivateRoute } from 'components'
import { Home, Search, Artist } from 'views'

import './App.module.css'

const App = () => (
  <Layout>
    <Switch>
      <PrivateRoute path="/artist/:id">
        <Artist />
      </PrivateRoute>
      <PrivateRoute path="/search">
        <Search />
      </PrivateRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  </Layout>
)

export default App
