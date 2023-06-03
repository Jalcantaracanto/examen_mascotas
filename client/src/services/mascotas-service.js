import axios from 'axios'

export const nuevaMascota = (mascota) => axios.post('/api/mascota/nuevo', mascota)

export const listarMascotas = () => axios.get('/api/mascotas')

export const buscarUnaMascota = (id) => axios.get(`/api/mascota/${id}`)

export const eliminarMascota = (id) => axios.delete(`/api/mascota/${id}`)

export const editarMascota = (id, mascota) => axios.put(`/api/mascota/${id}`, mascota)

export const ActualizarMascota = (id, mascota) => axios.put(`/api/mascota/${id}`, mascota)