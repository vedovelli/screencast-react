
import http from './http'

export const fetchRepos = user => http.get(`users/${user}/repos`)
