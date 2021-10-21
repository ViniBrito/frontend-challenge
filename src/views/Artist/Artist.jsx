import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { SomosClient } from 'utils'

import styles from './Artist.module.css'

const Artist = () => {
  const client = new SomosClient()
  const [result, setResult] = useState(null)
  const [album, setAlbum] = useState(null)
  const send = async value => {
    const temp = await client.getInfo(value)
    const temp2 = await client.getAlbum(value)
    setResult(temp)
    setAlbum(temp2)
  }

  const { id } = useParams()
  if (!result || !album) {
    send(id)
    return (
      <div className={styles.wrapper}>
        <p>Carregando informações...</p>
      </div>
    )
  }
  return result.name ? (
    <div className={styles.wrapper}>
      <div>
        <h2>{result.name}</h2>
        <br />
        <img
          src={
            result.images[0]
              ? result.images[0].url
              : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg'
          }
          height="30%"
          width="30%"
        />
        <br />
        <div className={styles.order}>
          <p>Popularidade: {result.popularity}</p>
          <p>
            {result.followers.total} seguido
            {result.followers.total === 1 ? 'r' : 'res'}.
          </p>
          <p>Gêneros musicais:</p>
          <p className={styles.item}>
            {result.genres.length > 0
              ? `${result.genres.join(' / ')}`
              : 'nenhum gênero cadastrado'}
          </p>
        </div>
      </div>
      <div className={styles.blank} />
      <h2>Álbuns do (a) artista (máximo de 10 álbuns)</h2>
      <div className={styles.list}>
        {album.items
          .filter(item => album.items.indexOf(item) < 10)
          .map(item => (
            <div className={styles.card}>
              <img src={item.images[0].url} height="80%" width="80%" />
              <p>Nome: {item.name} </p>
              {console.log(item.release_date)}
              <p>
                Lançamento:
                {item.release_date.length > 4
                  ? `\n${item.release_date.substr(
                      -2,
                    )}/${item.release_date.substr(
                      5,
                      2,
                    )}/${item.release_date.substr(0, 4)}`
                  : `\n${item.release_date}`}
              </p>
            </div>
          ))}
      </div>
      <br />
      <form action="/">
        <button>Página inicial</button>
      </form>
    </div>
  ) : (
    <div className={styles.wrapper}>
      <h2>Erro: página inválida</h2>
      <br />
      <form action="/">
        <button>Página inicial</button>
      </form>
    </div>
  )
}

export default Artist
