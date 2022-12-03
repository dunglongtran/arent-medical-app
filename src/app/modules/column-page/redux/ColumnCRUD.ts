import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL || 'api'


export const GET_RECOMMEND = `${API_URL}/column/recommend`
export const GET_POST = `${API_URL}/column/post`

export function getRecommend() {
  return axios.get(GET_RECOMMEND )
}
export function getPost() {
  return axios.get(GET_POST)
}

