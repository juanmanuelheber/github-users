import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
    return (
        <Spinner 
            animation="border" 
            variant="primary" 
            className="position-fixed top-50 start-50" />
    )
}
