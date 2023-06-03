import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../styles/RegistroMascota.module.scss'
import { DatosMascotas } from '../components/DatosMascotas'
import { buscarUnaMascota } from '../services/mascotas-service'

export const EditarMascota = () => {
    const { id } = useParams()
    const [mascota, setMascota] = useState({})

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

    return (
        <>
            <div className={styles['main-container']}>
                <div className={styles['header-container']}>
                    <div>
                        <h1>Refugio para mascotas</h1>
                        <h3>¿conoce a una mascota que necesita un hogar?</h3>
                    </div>
                    <Link to="/Home" className="navBar-button">
                        Volver al Inicio
                    </Link>
                </div>
                <div className={styles['form-container']}>
                    <DatosMascotas mascota={mascota}/>
                </div>
            </div>
        </>
    )
}
