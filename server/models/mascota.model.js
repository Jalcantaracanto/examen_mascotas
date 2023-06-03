const { Schema, model } = require('mongoose')

const MascotaSchema = new Schema(
    {
        nombre: {
            type: String,
            required: [true, 'El nombre es requerido'],
            minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
            validate: {
                validator: async function (name) {
                    const pet = await this.constructor.findOne({ petName: name })
                    return !pet
                },
                message: 'Nombre ya registrado',
            },
        },
        tipo: {
            type: String,
            required: [true, 'El tipo es requerido'],
            minlength: [3, 'El tipo debe tener al menos 3 caracteres'],
        },
        descripcion: {
            type: String,
            required: [true, 'La descripcion es requerida'],
            minlength: [3, 'La descripcion debe tener al menos 3 caracteres'],
        },
        habilidad1: {
            type: String,
        },
        habilidad2: {
            type: String,
        },
        habilidad3: {
            type: String,
        },
    },
    { timestamps: true }
)

MascotaSchema.index({ nombre: 1 }, { unique: true })

module.exports = model('Mascota', MascotaSchema)
