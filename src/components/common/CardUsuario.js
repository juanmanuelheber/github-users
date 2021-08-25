import React from 'react'
import { Card, Row, Col } from "react-bootstrap"
import { InfoUsuario } from './InfoUsuario'
import "./CardUsuario.css"

export const CardUsuario = (props) => {
    return (
        <Card bg="light">
            <Card.Header className="d-flex justify-content-between">
                <span>#{props.id}</span>
                <span>{props.login}</span>
            </Card.Header>
            <Card.Body>
                <Row className="centrado">
                    <Col xs={12} md={5} className="centrado mb-3 mb-md-0">
                        <Card.Img src={props.avatar_url} className="imagen-card" />
                    </Col>
                    <Col xs={12} md={7}>
                        <Card.Title className="text-center text-md-start">{props.name}</Card.Title>
                        {props.bio && props.bio!=="" &&
                            <InfoUsuario 
                                mensaje={props.bio} 
                                className="text-muted" />}
                        {props.html_url && props.html_url!=="" &&
                            <InfoUsuario
                                mensaje={props.html_url}
                                icon={["fab","github"]}
                                link={props.html_url} />}
                        <InfoUsuario
                            mensaje={`${props.public_repos || 0} repositorios`}
                            icon={["fa","star"]} 
                            link={`https://github.com/${props.login}?tab=repositories`} />
                        <InfoUsuario
                            mensaje={`${props.followers || 0} seguidores | ${props.following || 0} siguiendo`}
                            icon={["fa","users"]} />
                    </Col>
                </Row>
                <div className="d-flex justify-content-around align-items-center flex-wrap mt-3">
                    {props.twitter_username && props.twitter_username!=="" &&
                        <InfoUsuario
                            mensaje={`@${props.twitter_username}`}
                            icon={["fab","twitter"]}
                            link={`https://twitter.com/${props.twitter_username}`} />}
                    {props.location && props.location!=="" &&
                        <InfoUsuario
                            mensaje={props.location}
                            icon={["fa","map-marker-alt"]} />}
                </div>
            </Card.Body>
        </Card>
    )
}
