import React, { useState, useEffect } from "react";
import TarjetaPersonaje from "./TarjetaPersonaje";

export default function PersonajesInfo(){
    
    const [personajes, setPersonajes] = useState([]);

    // const [contador, setContador] = useState(0);

    const obtenerPersonajes = async () => {
        let resultado = await fetch("https://rickandmortyapi.com/api/character");
        let datos = await resultado.json();

        //console.log(datos);

        setPersonajes(datos.results);
    }

    /** FILTRO */

    const [filtro, setFiltro] = useState("");

    const filtrarStatus = (e) => {
        console.log(e.target.value);
        setFiltro(e.target.value);
    }

    console.log(filtro);

    useEffect(() => {
        obtenerPersonajes();
    }, []);
    
    
    
    return(
        <div className="row">
            <div>
                <select onChange={filtrarStatus}>
                    <option value="Humanoid">Humanoide</option>
                    <option value="Alien">Alien</option>
                    <option value="Human">Humano</option>
                    <option value="Mythological Creature">Criatura Mitologica</option>
                    <option value="unknown">Desconocido</option>
                    <option value="Poopybutthole">Poopybutthole</option>
                    <option value="Animal">Animal</option>
                    <option value="Robot">Robot</option>
                    <option value="Cronenberg">Cronenberg</option>
                    <option value="Disease">Disease</option>
                </select>
            </div>
            
            {/**
                personajes.map((personaje, indice) => {
                    return <TarjetaPersonaje key={indice} {...personaje} />
                })
            */}
            {/**
                personajes.filter((propiedad) => {
                    return propiedad.status.includes(filtro)
                }).map((personaje, indice) => {
                    return <TarjetaPersonaje key={indice} {...personaje} />
                }).map((personaje, indice) => {
                    return <TarjetaPersonaje key={indice} figura={personaje} /> 
                })
            */}
            {
                personajes.filter((propiedad) => {
                    return propiedad.species.includes(filtro)
                }).map((personaje, indice) => {
                    return <TarjetaPersonaje key={indice} {...personaje} />
                })
            }
            {/**
                personajes.map((personaje, indice) => {
                    return <TarjetaPersonaje key={indice} {...personaje} />
                })
            */}
            
        </div>
    )
    
}