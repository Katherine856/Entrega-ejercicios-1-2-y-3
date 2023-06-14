import React from "react";
import { Contacto } from "../models/contacto.class";
import ComponenteB from './componenteB'

const ComponenteA = () => {

    const defaultContacto = new Contacto('Juna', 'Ramirez', 'juanramirez@correo.com', false);

    return (
        <>
            <ComponenteB contacto={ defaultContacto }/>
        </>
    )
}

export default ComponenteA;