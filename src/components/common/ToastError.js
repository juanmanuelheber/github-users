import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Toast } from "react-bootstrap"
import { useSelector } from 'react-redux';

export const ToastError = () => {
  
  // Estado para mostrar/ocultar el Toast
  const [mostrar, setMostrar] = useState(false);
  const toggleMostrar = () => setMostrar(!mostrar);

  // Lee el estado global
  const state = useSelector(state => state.state)

  // Si existe un error en el estado global, muestra el Toast
  useEffect(() => {
    state.error ? setMostrar(true) : setMostrar(false)
  }, [state.error])

  return (
    <div className="position-fixed bottom-0 end-0 p-3">
      <Toast 
        show={mostrar} 
        onClose={toggleMostrar}
        autohide
        className="bg-warning">
        <Toast.Header>
          <FontAwesomeIcon icon="exclamation-circle"/>
          <strong className="ms-2 me-auto">Atención</strong>
        </Toast.Header>
        <Toast.Body>
            {/* Lee el error del estado global */}
            {state.error}
        </Toast.Body>
      </Toast>
    </div>
  )
}
