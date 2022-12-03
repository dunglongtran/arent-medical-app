import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL || 'api'


export const GET_CHART = `${API_URL}/top/chart`
export const GET_TRANSIT = `${API_URL}/top/transit`
export const GET_MEAL = `${API_URL}/top/meal`

export function getChart() {
  return axios.get(GET_CHART)
}
export function getTransit() {
  return axios.get(GET_TRANSIT )
}
export function getMeal() {
  return axios.get(GET_MEAL)
}

