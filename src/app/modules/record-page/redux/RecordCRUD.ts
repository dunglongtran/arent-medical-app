import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL || 'api'


export const GET_CHART = `${API_URL}/record/chart`
export const GET_ENTRY = `${API_URL}/record/entry`
export const GET_EXERCISE = `${API_URL}/record/exercise`
export const GET_DIARY = `${API_URL}/record/dairy`

export function getChart() {
  return axios.get(GET_CHART)
}
export function getEntry() {
  return axios.get(GET_ENTRY )
}
export function getExercise() {
  return axios.get(GET_EXERCISE)
}
export function getDairy() {
  return axios.get(GET_DIARY)
}

