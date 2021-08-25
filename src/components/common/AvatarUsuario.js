import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import "./AvatarUsuario.css"

export const AvatarUsuario = (props) => {
    return (
        <Row className="centrado text-white">
            <Col xs={12} sm={10} md={8} lg={6}>
                {/* Genera un Link a la vista UserDetails pasando el login como parámetro */}
                <Link to={`/usuario/${props.login}`}>
                    <div className="contenedor-avatar rounded d-flex align-items-center p-3 m-1">
                        <div className="imagen-avatar mx-3">
                            <Image src={props.avatar_url} roundedCircle fluid/>
                        </div>
                        <div className="px-3">
                            <h5>Usuario: {props.login}</h5>
                            <p className="m-0">Id: {props.id}</p>
                        </div>
                    </div>
                </Link>
            </Col>
        </Row>
    )
}
