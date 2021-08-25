import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const InfoUsuario = ({icon,mensaje,className="",link}) => {
    return (
        link 
        ?
            <Link to={{ pathname: link }} target="_blank">
                <div className="text-center text-md-start mt-1">
                    {icon && <FontAwesomeIcon icon={icon} /> }
                    {mensaje && <small className={className}> {mensaje}</small>}
                </div>
            </Link> 
        :
            <div className="text-center text-md-start mt-1">
                {icon && <FontAwesomeIcon icon={icon} /> }
                {mensaje && <small className={className}> {mensaje}</small>}
            </div>
    )
}
