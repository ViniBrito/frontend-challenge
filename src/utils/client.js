import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL
  }

  onError = error => {}

  async getArtists(query) {
    try {
      const response = await fetch(
        `${this.baseURL}/search?q=${query}&type=artist`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getToken()}`,
            Accept: 'application/json',
          },
        },
      )
      const data = response.json()
      return data
    } catch (error) {
      this.onError(error)
    }
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
  }

  async getInfo(id) {
    try {
      const response = await fetch(`${this.baseURL}/artists/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      const data = response.json()
      return data
    } catch (error) {
      this.onError(error)
    }
  }
  async getAlbum(id) {
    try {
      const response = await fetch(
        `${this.baseURL}/artists/${id}/albums?limit=10`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      )
      const data = response.json()
      return data
    } catch (error) {
      this.onError(error)
    }
  }
}

export default SomosClient
