import React from 'react'

import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()
  render() {
    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <h1>Bem vindo (a) ao ArtistFetch!</h1>
          <br />
          <p>
            Aqui você consegue localizar qualquer música do seu artista
            favorito.
            <br />
            Experimente clicando no botão abaixo.
          </p>
        </div>
        <div className={styles.space}>
          <Link to="/search">
            <button>Buscar artista</button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
