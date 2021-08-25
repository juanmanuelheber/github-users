import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { types } from '../redux/types'
import { BUSCAR_URL } from '../const/locales'
import { fetchData } from '../utils/functions'
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Loader } from './Loader'

export const BuscarUsuario = () => {
    const dispatch = useDispatch()
    // Estados para cargar usuario, errores, respuesta de la API y mostrar/ocultar el Spinner
    const [usuario,setUsuario]=useState("")
    const [error,setError]=useState(null)
    const [data,setData]=useState({})
    const [cargando,setCargando]=useState(false)

    // Evita el envío del formulario
    const handleSubmit=(e)=>e.preventDefault();
   
    const handleChange=(e)=>{
        // Actualiza el estado "usuario" con el valor ingresado
        setUsuario(e.target.value);
        // Inicializa el estado "error" para que desaparezca el Toast
        setError(null);
    }

    // Valida si existen errores en la busqueda
    // Si existen errores, los carga en el estado "error"
    const validar=()=>{
        if (!usuario) {
            setError('Debe ingresar un usuario');
        } else if (usuario.length<4) {
            setError('El usuario debe tener un mínimo de 4 letras');
        } else {
            // Muestra el Spinner
            setCargando(true)
            // Si no hay errores, eealiza el fetch a la API con el usuario ingresado
            fetchData(BUSCAR_URL,usuario)
            // Carga la respuesta de la API en el estado de "data"
            // Si no hay respuesta, carga un error en el estado "error"
            .then(data=>
                data.items.length>0
                ?setData(data.items)
                :setError('No existen usuarios para la búsqueda')
            )
        }
    }

    useEffect(() => {
        // Carga la respuesta de la API en el estado global y oculta el Spinner (sólo si existes datos)
        if (Object.keys(data).length>0){
            dispatch({
                type:types.USUARIOS,
                payload: {usuarios:data}
            })
            setCargando(false)
        } 
    }, [data,dispatch])

    useEffect(() => {
        // Carga el error en el estado global
        dispatch({
            type: types.ERROR,
            payload: {error: error}
        })
        // Inicializa el estado global de "usuarios" al estado inicial
        dispatch({
            type: types.USUARIOS,
            payload: {usuarios:[]}
        })
    }, [error,dispatch])

    return (
        <Row className="centrado my-3 buscar">
            <Col xs={12} sm={10} md={8} lg={6}>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <FormControl
                            name="usuario" 
                            id="usuario"
                            onChange={handleChange}
                            value={usuario}
                            placeholder="Buscar usuario" />
                        <Button
                            variant="outline-primary"
                            onClick={validar} >
                                Buscar
                                <FontAwesomeIcon icon="search" className="ms-2"/>
                        </Button>
                    </InputGroup>
                </Form>
                {/* Carga el Spinner cuando se realiza el fetch */}
                {cargando && <Loader />}
            </Col>
        </Row>
    )
}
