import React, { useState } from 'react'

import { SomosClient } from 'utils'
import { SearchBar } from 'components'
import { Link } from 'react-router-dom'

import styles from './Search.module.css'

const Search = () => {
  const client = new SomosClient()
  const [result, setResult] = useState(null)
  const send = async value => {
    const temp = await client.getArtists(value)
    setResult(temp)
  }

  const Show = () => {
    if (!result) return <p>Os resultados aparecerão aqui.</p>
    const artistInfo = result.artists ? result.artists.items : []
    if (artistInfo.length > 0) {
      return (
        <>
          <p>
            Encontramos {artistInfo.length} resultad
            {artistInfo.length === 1 ? 'o' : 'os'}:
          </p>
          <div className={styles.result}>
            {artistInfo.map(item => (
              <div className={styles.card}>
                <img
                  src={
                    item.images[0]
                      ? item.images[0].url
                      : process.env.REACT_APP_MISSING_IMAGE_URL
                  }
                  height="200vh"
                  width="200vh"
                  alt={item.name}
                />
                <Link to={`/artist/${item.id}`}>{item.name}</Link>
              </div>
            ))}
          </div>
        </>
      )
    }
    return <p>Ooops! Nenhum resultado encontrado.</p>
  }

  return (
    <div className={styles.wrapper}>
      <p>
        Veja como é simples! Basta digitar abaixo o nome do (a) artista desejado
        (a) e clicar em Pesquisar.
      </p>
      <div className={styles.spaced}>
        <SearchBar onClick={send} />
      </div>
      <div className={styles.spaced}>
        <Show />
      </div>
      <div className={styles.spaced}>
        <Link to="/">
          <button>Página inicial</button>
        </Link>
      </div>
    </div>
  )
}

export default Search
