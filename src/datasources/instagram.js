import { nth } from 'lodash'
import InstagramAPI from 'instagram-api'

const ACCESS_TOKEN_REGEX = /#access_token=([0-9]{8}\.[0-9a-f]{7}\.[0-9a-f]{32})/

export class InstagramSource {

  constructor(clientId, redirectUri) {
    if (!clientId || typeof clientId !== 'string') {
      throw new Error("Expected clientId to be string.")
    }

    if (!redirectUri || typeof redirectUri !== 'string') {
      throw new Error("Expected redirectUri to be string.")
    }
    this.accessToken = this.receiveAccessToken(clientId, redirectUri)
    if (!this.accessToken) {
      throw new Error("Could not get accessToken.")
    }
    this.api = new InstagramAPI(this.accessToken)
  }

  receiveAccessToken(clientId, redirectUri) {
    const accessToken = nth(window.location.hash.match(ACCESS_TOKEN_REGEX), 1)

    if (window.location.search.indexOf('error') > -1) {
      // User probably denied access
      throw new Error("User did not approve access to instagram.")
    }

    if (!accessToken) {
      // Redirect to receive accessToken
      const params = [
        `client_id=${encodeURIComponent(clientId)}`,
        `redirect_uri=${encodeURIComponent(redirectUri)}`,
        `response_type=token`
      ]
      window.location.href = `https://api.instagram.com/oauth/authorize/?${params.join('&')}`
      return
    }
    window.location.hash = window.location.hash.replace(ACCESS_TOKEN_REGEX, '')

    return accessToken
  }

  getOwnMedia() {
    return this.api.userSelfMedia()
  }
}

export default InstagramSource
