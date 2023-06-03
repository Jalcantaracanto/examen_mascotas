const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1/mascotasdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err) => console.log('Error al conectar a la base de datos', err))
