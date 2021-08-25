import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from "react-bootstrap"

export const BotonVolver = () => {
    
    // Lleva a la vista Home
    const history=useHistory()
    const handleClick=()=>history.push("/")
    
    return (
        <div className="my-3 position-absolute top-0 start-50 translate-middle-x">
            <Button 
                onClick={handleClick}
                variant="outline-primary">
                Volver
            </Button>
        </div>
    )
}
