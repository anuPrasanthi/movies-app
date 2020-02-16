import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3000/api',
})

export const insertMovie = payLoad => api.post(`/movie`,payLoad)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id,payLoad) => api.put(`/movie/${id}`,payLoad)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis ={
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById
}
export default apis