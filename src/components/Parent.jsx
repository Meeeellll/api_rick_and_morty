import React from "react";
// import React, { useState, useEffect } from "react";
// import Child from "./Child";

export default function Parent() {

    // const [datos, setDatos] = useState([]);

    // const [contador, setContador] = useState(0);

    /** const obtenerDatos = async () => {
        let resultado = await fetch("https://rickandmortyapi.com/api/character");
        let var_datos = await resultado.json();

        //console.log(var_datos);

        setDatos(var_datos.results);
    }

    useEffect(() => {
        obtenerDatos();
    }, []); */

    return (
        <div>
            <h1>Hola</h1>
        </div>
        /**
            datos.map((specie, indice) => {
                return <Child key={indice} {...specie} />
            })
        */
    )
}