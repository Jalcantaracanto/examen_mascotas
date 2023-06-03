import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/VerMascota.module.scss'
import { DetalleMascota } from '../components/DetalleMascota'
import { useParams, useNavigate } from 'react-router-dom'
import { buscarUnaMascota, eliminarMascota } from '../services/mascotas-service'

export const VerMascota = ({ mascotas, setMascotas }) => {
    const { id } = useParams()
    const [mascota, setMascota] = useState({})
    const navigate = useNavigate()

    const buscarUnaMascotaServicio = async () => {
        buscarUnaMascota(id)
            .then((response) => {
                console.log(response.data)
                setMascota(response.data.mascota)
            })
            .catch((error) => console.log(error))
    }

    const eliminarMascotaServicio = async () => {
        try {
            await eliminarMascota(id)
            navigate(-1)
        } catch (error) {
            console.error(error)
        }
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
                        <h3>Mascotas buscando un buen Hogar</h3>
                    </div>
                    <div className={styles['menu-header']}>
                        <Link to="/home">
                            Volver atrás
                        </Link>
                        <input className="adopt-button" type="button" onClick={() => eliminarMascotaServicio(mascota._id)} value={`Adoptar ${mascota.nombre}`} />
                    </div>
                </div>
                <div>
                    <DetalleMascota mascota={mascota} />
                </div>
            </div>
        </>
    )
}
