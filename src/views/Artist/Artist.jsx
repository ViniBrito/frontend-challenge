import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { SomosClient } from 'utils'

import styles from './Artist.module.css'

const Artist = () => {
  const [result, setResult] = useState(null)
  const [album, setAlbum] = useState(null)

  const formatter = date => new Date(date).toLocaleDateString('pt-br')

  const { id } = useParams()
  useEffect(() => {
    const client = new SomosClient()
    const send = async value => {
      const infoResult = await client.getInfo(value)
      const albumResult = await client.getAlbum(value)
      setResult(infoResult)
      setAlbum(albumResult)
    }
    send(id)
  }, [id])

  const ArtistInfo = () => {
    const imgSrc = result.images[0]
      ? result.images[0].url
      : process.env.REACT_APP_MISSING_IMAGE_URL
    return (
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>{result.name}</h2>
          <img src={imgSrc} height="30%" width="30%" alt={result.name} />
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
        <h2>Álbuns do (a) artista (máximo de 10 álbuns)</h2>
        <div className={styles.list}>
          {album.items.map(item => (
            <div className={styles.card}>
              <img src={item.images[0].url} height="80%" width="80%" />
              <p>Nome: {item.name} </p>
              <p>
                Lançamento:
                {`\n${formatter(item.release_date)}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!result || !album) {
    return (
      <div className={styles.wrapper}>
        <p>Carregando informações...</p>
      </div>
    )
  }
  return result.name ? (
    <div className={styles.wrapper}>
      <ArtistInfo />
      <Link to="/">
        <button>Página inicial</button>
      </Link>
    </div>
  ) : (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Erro: página inválida</h2>
      <Link to="/">
        <button>Página inicial</button>
      </Link>
    </div>
  )
}

export default Artist
