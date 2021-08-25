import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AvatarUsuario } from './AvatarUsuario'

export const ListaUsuarios = () => {
    const state = useSelector(state => state.state)
    return (
        <Container>
            <Row>
                {state.usuarios.map(user=>
                    <Col xs={12} key={user.id}>
                        <AvatarUsuario {...user} />
                    </Col>
                )}
            </Row>
        </Container>
    )
}
