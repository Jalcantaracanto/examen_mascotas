import React from 'react'

import styles from '../styles/VerMascota.module.scss'

export const DetalleMascota = ({ mascota }) => {
    const habilidades = [mascota.habilidad1, mascota.habilidad2, mascota.habilidad3].filter(Boolean)

    return (
        <>
            <div className={styles.container}>
                <div className={styles['bold-text']}>
                    <label htmlFor="">Tipo Mascota: </label>
                    <span>{mascota.tipo}</span>
                </div>
                <div className={`${styles['bold-text']} ${styles['margin']}`}>
                    <label htmlFor="">Descripción : </label>
                    <span>{mascota.descripcion}</span>
                </div>
                <div className={`${styles['bold-text']} ${styles['margin']}`}>
                    <label htmlFor="">Habilidades: </label>
                    {habilidades.length > 0 ? (
                        <div className={styles['alinear']}>
                            {habilidades.map((habilidad, index) => (
                                <div key={index}>{habilidad}</div>
                            ))}
                        </div>
                    ) : (
                        <span>Ninguna habilidad</span>
                    )}
                </div>
            </div>
        </>
    )
}
