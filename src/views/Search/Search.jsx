import React, { useState } from 'react'

import { SomosClient } from 'utils'
import { SearchBar } from 'components'

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
            {+artistInfo.length === 1 ? 'o' : 'os'}:
          </p>
          <div className={styles.result}>
            {artistInfo.map(item => (
              <div className={styles.card}>
                <img
                  src={
                    item.images[0]
                      ? item.images[0].url
                      : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg'
                  }
                  height="200vh"
                  width="200vh"
                  alt={item.name}
                />
                <a href={`/artist/${item.id}`}>{item.name}</a>
              </div>
            ))}
          </div>
        </>
      )
    }
    return <p>Ooops! Nenhum resultado encontrado.</p>
  }

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <p>
          Veja como é simples! Basta digitar abaixo o nome do (a) artista
          desejado (a) e clicar em Pesquisar.
        </p>
        <br />
        <SearchBar onClick={send} />
        <br />
        <Show />
        <br />
        <form action="/">
          <button>Página inicial</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Search
