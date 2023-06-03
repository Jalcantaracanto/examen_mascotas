import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from '../styles/RegistroMascota.module.scss'
import { buscarUnaMascota, ActualizarMascota } from '../services/mascotas-service'

export const DatosMascotas = () => {
    const { id } = useParams()
    const [errores, setError] = useState({})
    const [mascota, setMascota] = useState({
        nombre: '',
        tipo: '',
        descripcion: '',
        habilidad1: '',
        habilidad2: '',
        habilidad3: '',
    })
    const navigate = useNavigate()

    const buscarUnaMascotaServicio = async () => {
        buscarUnaMascota(id)
            .then((response) => {
                console.log(response.data)
                setMascota(response.data.mascota)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        buscarUnaMascotaServicio()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setMascota({
            ...mascota,
            [name]: value,
        })
    }

    const ActualizarMascotaServicio = async (e) => {
        e.preventDefault()
        try {
            const response = await ActualizarMascota(id, mascota)
            console.log(response.data)
            setMascota(response.data.mascota)
        } catch (error) {
            console.log(error)
            const myError = error.response.data.errors
            console.log(myError)
            setError({
                nombre: myError.nombre ? myError.nombre : '',
                tipo: myError.tipo ? myError.tipo : '',
                description: myError.description ? myError.description : '',
            })
            console.log(errores)
        }
    }

    return (
        <form onSubmit={ActualizarMascotaServicio} className={styles.form}>
            <div className={styles['form-right']}>
                <div>
                    <label htmlFor="nombre">Nombre Mascota:</label>
                </div>
                <div>
                    <input type="text" id="nombre" name="nombre" onChange={handleChange} value={mascota.nombre} />
                </div>
                <div>
                    <label htmlFor="tipo">Tipo Mascota:</label>
                </div>
                <div>
                    <input type="text" id="tipo" name="tipo" onChange={handleChange} value={mascota.tipo} />
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción Mascota:</label>
                </div>
                <div>
                    <input type="text" id="descripcion" name="descripcion" onChange={handleChange} value={mascota.descripcion} />
                </div>
                <input type="submit" value="Agregar Mascota" />
            </div>
            <div className={styles['form-left']}>
                <h3>Habilidades (opcional)</h3>
                <div>
                    <label htmlFor="habilidad1">Habilidad 1:</label>
                </div>
                <div>
                    <input type="text" id="habilidad1" name="habilidad1" onChange={handleChange} value={mascota.habilidad1} />
                </div>
                <div>
                    <label htmlFor="habilidad2">Habilidad 2:</label>
                </div>
                <div>
                    <input type="text" id="habilidad2" name="habilidad2" onChange={handleChange} value={mascota.habilidad2} />
                </div>
                <div>
                    <label htmlFor="habilidad3">Habilidad 3:</label>
                </div>
                <div>
                    <input type="text" id="habilidad3" name="habilidad3" onChange={handleChange} value={mascota.habilidad3} />
                </div>
            </div>
        </form>
    )
}
