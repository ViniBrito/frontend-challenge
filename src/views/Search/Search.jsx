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
              <div style={{ padding: '2px' }}>
                {item.name}
                <br />
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
        {Show()}
      </div>
    </React.Fragment>
  )
}

export default Search
