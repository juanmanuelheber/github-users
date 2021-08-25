import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { USUARIO_URL } from '../const/locales'
import { fetchData } from '../utils/functions'
import { Container } from 'react-bootstrap'
import { CardUsuario } from '../common/CardUsuario'
import { BotonVolver } from '../common/BotonVolver'
import { Loader } from '../common/Loader'

export const UserDetail = () => {
    // Estado para cargar data del estado global
    const [data,setData]=useState({})
    // Estado para mostrar/ocultar el Spinner
    const [cargando,setCargando]=useState(false)

    // Lee el parámetro en la ruta
    const {login}=useParams()

    useEffect(() => {
        // Muestra el Spinner
        setCargando(true)
        // Realiza un fetch a la API con el parámetro de la ruta
        fetchData(USUARIO_URL,login)
        // Carga la respuesta en el estado "data"
        .then(data=>setData(data))
    }, [login])

    // Si existen datos de respuesta de la API, oculta el Spinner
    useEffect(() => {
        Object.keys(data).length>0 && setCargando(false)
    }, [data])
    
    return (
        <Container className="centrado">
            <BotonVolver />
            {/* Carga el Spinner cuando se realiza el fetch */}
            {cargando && <Loader />}
            {/* Carga el componente CardUsuario y pasa la respuesta de la API como parámetro */}
            {Object.keys(data).length>0 && <CardUsuario {...data} /> }
        </Container>
    )
}
