import React from 'react'

import { SomosClient } from 'utils'
import { SearchBar } from 'components'

import styles from './Search.module.css'

class Search extends React.Component {
  state = {}

  client = new SomosClient()
  render() {
    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <p>Veja como é simples! Basta digitar abaixo o nome do (a) artista desejado e clicar em Pesquisar.</p>
          <br/>
          <SearchBar/>
        </div>
      </React.Fragment>
    )
  }
}

export default Search
