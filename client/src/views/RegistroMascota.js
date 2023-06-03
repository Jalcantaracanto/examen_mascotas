import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/RegistroMascota.module.scss'
import { FormMascotas } from '../components/FormMascotas'

export const RegistroMascota = () => {
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
                    <FormMascotas/>
                </div>
            </div>
        </>
    )
}
