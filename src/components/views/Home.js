import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { BuscarUsuario } from '../common/BuscarUsuario'
import { ListaUsuarios } from '../common/ListaUsuarios'

export const Home = () => { 
    // Lee el estado global
    const state = useSelector(state => state.state)

    return (
        <Container>
            <BuscarUsuario />
            {/* Carga el componente "ListaUsuarios" si existen datos en el estado global */}
            {state.usuarios.length>0 && <ListaUsuarios /> }
        </Container>
    )
}
