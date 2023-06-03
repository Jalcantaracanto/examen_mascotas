const Mascota = require('../models/mascota.model')

module.exports.crearMascota = async (req, res) => {
    try {
        const nuevaMascota = await Mascota.create(req.body)
        res.json({ mascota: nuevaMascota })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Error al crear mascota', error: err.message })
    }
}

module.exports.listarMascotas = (req, res) => {
    Mascota.find()
        .then((listaMascotas) => res.json({ mascotas: listaMascotas }))
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: 'Error al listar mascotas', error: err })
        })
}

module.exports.obtenerMascota = (req, res) => {
    Mascota.findOne({ _id: req.params.id })
        .then((mascota) => res.json({ mascota: mascota }))
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: 'Error al obtener mascota', error: err })
        })
}

module.exports.actualizarMascota = (req, res) => {
    Mascota.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((mascotaActualizada) => res.json({ message: 'Mascota actualizada', mascota: mascotaActualizada }))
        .catch((err) => res.json({ message: 'No podemos actualizar mascota', error: err }))
}

// module.exports.actualizarMascota = (req, res) => {
//     Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
//         .then((mascotaActualizada) => {
//             if (!mascotaActualizada) {
//                 return res.status(404).json({ message: "Product not found" })
//             }
//             res.json({ product: mascotaActualizada })
//         })
//         .catch((err) => {
//             if (err.name === "ValidationError") {
//                 const validationErrors = {}
//                 for (field in err.errors) {
//                     validationErrors[field] = err.errors[field].message
//                 }
//                 return res.status(400).json({ errors: validationErrors })
//             }
//             res.status(500).json({ message: "Failed to update the product", error: err })
//         })
// }

module.exports.eliminarMascota = (req, res) => {
    Mascota.deleteOne({ _id: req.params.id })
        .then((eliminacionMascota) => res.json({ message: 'Mascota eliminada', mascota: eliminacionMascota }))
        .catch((err) => res.json({ message: 'No podemos eliminar mascota', error: err }))
}
