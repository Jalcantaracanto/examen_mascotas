const { crearMascota, listarMascotas, obtenerMascota, actualizarMascota, eliminarMascota } = require('../controllers/mascota.controllers')

module.exports = (app) => {
    app.post('/api/mascota/nuevo', crearMascota)
    app.get('/api/mascotas', listarMascotas)
    app.get('/api/mascota/:id', obtenerMascota)
    app.put('/api/mascota/:id', actualizarMascota)
    app.delete('/api/mascota/:id', eliminarMascota)
}
