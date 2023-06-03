import React from 'react'
import styles from '../styles/ListadoMascotas.module.scss'
import { Link } from 'react-router-dom'

export const ListarMascotas = ({ mascotas, setMascotas }) => {
    return (
        <>
            <div className={styles['listado-container']}>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mascotas
                            .sort((a, b) => a.tipo.localeCompare(b.tipo))
                            .map((mascota, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{mascota.nombre}</td>
                                        <td>{mascota.tipo}</td>
                                        <td>
                                            <Link to={`/mascota/${mascota._id}`}>
                                                <input type="button" value="Detalle" mascota_id={mascota._id} />
                                            </Link>
                                            <Link to={`/mascota/${mascota._id}/edit`} key={mascota._id}>
                                                <input type="button" value="Editar" />
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
