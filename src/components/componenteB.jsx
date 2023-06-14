import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from "../models/contacto.class";

const ComponenteB = ({ contacto }) => {
    
        return (
            <>
                <h2> Nombre: {contacto.nombre} </h2>
                <h2> Apellido: {contacto.apellido} </h2>
                <h3> Correo: {contacto.email} </h3>
                <h3> Conectado: {contacto.conectado ? ' Contacto En Línea ' : 'Contacto No Disponible'} </h3>

            </>
        )
    
};

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;