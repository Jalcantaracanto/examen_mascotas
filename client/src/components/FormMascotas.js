import React, { useState } from 'react'
import { nuevaMascota } from '../services/mascotas-service'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from '../styles/RegistroMascota.module.scss'
import { useNavigate } from 'react-router-dom'

export const FormMascotas = () => {
    const [errores, setError] = useState({})

    const navigate = useNavigate()

    const validationSchema = Yup.object({
        nombre: Yup.string().required('El nombre es obligatorio').min(3, 'El nombre debe tener al menos 3 caracteres'),
        tipo: Yup.string().required('El tipo es obligatorio').min(3, 'El tipo debe tener al menos 3 caracteres'),
        descripcion: Yup.string().required('La descripción es obligatoria').min(3, 'La descripción debe tener al menos 3 caracteres'),
        habilidad1: Yup.string(),
        habilidad2: Yup.string(),
        habilidad3: Yup.string(),
    })

    const formik = useFormik({
        initialValues: {
            nombre: '',
            tipo: '',
            descripcion: '',
            habilidad1: '',
            habilidad2: '',
            habilidad3: '',
        },
        validationSchema,
        onSubmit: (values) => {
            nuevaMascota(values)
                .then((response) => {
                    console.log(response)
                    formik.resetForm()
                    navigate(-1)
                })
                .catch((error) => {
                    console.log(error)
                    const myError = error.response.data
                    console.log(myError)
                    setError({
                        duplicado: myError.message ? myError.message : '',
                        nombre: myError.nombre ? myError.nombre : '',
                        tipo: myError.tipo ? myError.tipo : '',
                        descripcion: myError.descripcion ? myError.descripcion : '',
                    })
                    console.log(errores)
                })
        },
    })

    const { handleSubmit, handleChange, values, touched, errors } = formik

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles['form-right']}>
                    <div>{errores.duplicado && <div className={styles.error}>{errores.duplicado}</div>}</div>
                    <div>
                        <label htmlFor="nombre">Nombre Mascota:</label>
                    </div>
                    <div>
                        <input type="text" id="nombre" name="nombre" onChange={handleChange} value={values.nombre} className={errors.nombre && touched.nombre ? styles['input-error'] : ''} />
                        {touched.nombre && errors.nombre && <div className={`${styles.error} ${styles['input-error']}`}>{errors.nombre}</div>}
                    </div>
                    <div>
                        <label htmlFor="tipo">Tipo Mascota:</label>
                    </div>
                    <div>
                        <input type="text" id="tipo" name="tipo" onChange={handleChange} value={values.tipo} className={errors.tipo && touched.tipo ? styles['input-error'] : ''} />
                        {touched.tipo && errors.tipo && <div className={`${styles.error} ${styles['input-error']}`}>{errors.tipo}</div>}
                    </div>
                    <div>
                        <label htmlFor="descripcion">Descripción Mascota:</label>
                    </div>
                    <div>
                        <input type="text" id="descripcion" name="descripcion" onChange={handleChange} value={values.descripcion} className={errors.descripcion && touched.descripcion ? styles['input-error'] : ''} />
                        {touched.descripcion && errors.descripcion && <div className={`${styles.error} ${styles['input-error']}`}>{errors.descripcion}</div>}
                    </div>
                    <input type="submit" value="Agregar Mascota" />
                </div>
                <div className={styles['form-left']}>
                    <h3>Habilidades (opcional)</h3>
                    <div>
                        <label htmlFor="habilidad1">Habilidad 1:</label>
                    </div>
                    <div>
                        <input type="text" id="habilidad1" name="habilidad1" onChange={handleChange} value={values.habilidad1} />
                    </div>
                    <div>
                        <label htmlFor="habilidad2">Habilidad 2:</label>
                    </div>
                    <div>
                        <input type="text" id="habilidad2" name="habilidad2" onChange={handleChange} value={values.habilidad2} />
                    </div>
                    <div>
                        <label htmlFor="habilidad3">Habilidad 3:</label>
                    </div>
                    <div>
                        <input type="text" id="habilidad3" name="habilidad3" onChange={handleChange} value={values.habilidad3} />
                    </div>
                </div>
            </form>
        </>
    )
}
