import React from 'react'
import { Container } from 'react-bootstrap'
import { ToastError } from '../common/ToastError'
import "./Layout.css"

export const Layout = ({children}) => {
    return (
        <Container fluid className="layout centrado p-1 p-md-3 p-lg-5">
            <ToastError />
            {children}
        </Container>
    )
}
