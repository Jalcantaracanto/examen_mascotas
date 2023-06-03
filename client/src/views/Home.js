import React, { useState, useEffect } from 'react'
import { ListarMascotas } from '../components/ListarMascotas'
import styles from '../styles/ListadoMascotas.module.scss'
import { Link } from 'react-router-dom'
import { listarMascotas } from '../services/mascotas-service'

export const Home = () => {
    const [mascotas, setMascotas] = useState([])

    const tomarMascotasDeServicio = () => {
        listarMascotas()
            .then((response) => {
                console.log(response)
                setMascotas(response.data.mascotas)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        tomarMascotasDeServicio()
    }, [])
    return (
        <>
            <div className={styles['main-container']}>
                <div className={styles['header-container']}>
                    <div>
                        <h1>Refugio para mascotas</h1>
                        <h3>Mascotas buscando un buen Hogar</h3>
                    </div>
                    <Link to="/mascota/nueva" className="navBar-button">
                        Agregar nueva mascota
                    </Link>
                </div>
                <div>
                    <ListarMascotas mascotas={mascotas} setMascotas={setMascotas} />
                </div>
            </div>
        </>
    )
}
