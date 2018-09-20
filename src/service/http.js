
import axios from 'axios'

class Http {

  constructor({ baseURL }) {
    this.baseURL = baseURL
    this.axios = axios.create({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  get(pathUrl, params) {
    return this.axios.get(this._buildUrl(pathUrl, { params }))
  }

  _buildUrl(pathUrl) {
    return this.baseURL + pathUrl
  }

}

const baseURL = 'https://api.github.com/'

let http

if (!http) {
  http = new Http({ baseURL })
}

export default http;
