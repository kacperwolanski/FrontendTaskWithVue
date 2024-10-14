import axios from 'axios'

const API_URL = 'https://reqres.in/api/users'

export const fetchInterns = async (page = 1) => {
  const response = await axios.get(`${API_URL}?page=${page}`)
  return response.data.data
}

export const addIntern = async intern => {
  const response = await axios.post(API_URL, intern)
  return response.data
}

export const updateIntern = async (id, intern) => {
  const response = await axios.put(`${API_URL}/${id}`, intern)
  return response.data
}

export const deleteIntern = async id => {
  await axios.delete(`${API_URL}/${id}`)
}
