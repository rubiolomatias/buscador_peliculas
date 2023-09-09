import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://www.omdbapi.com/?t=',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTitle(name) {
    return apiClient.get(name + "&apikey=5e38f6e5")
  }
}