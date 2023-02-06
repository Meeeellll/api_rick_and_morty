import React, { useState, useEffect } from "react";
//import Estado from "./Filters/Categorias/Estado";
//import Filter from "./Filters/Filter";
import TarjetaPersonaje from "./TarjetaPersonaje";
//import Especie from "./Filters/Categorias/Especie";

export default function PersonajesInfo(){

    const [personajes, setPersonajes] = useState([
        {
            name: 'Rick Sanchez',
            url: 'https://rickandmortyapi.com/api/character/1'
        }
    ]);

    const [filtroEspecie, setFiltroEspecie] = useState("");
    const [filtroGenero, setFiltroGenero] = useState("");
    const [filtroEstado, setFiltroEstado] = useState("");

    let api = `https://rickandmortyapi.com/api/character/?gender=${filtroGenero}&species=${filtroEspecie}`;

    const obtenerPersonajes = async () => {
        let resultado = await fetch(api);
        let datos = await resultado.json();

        //console.log(datos);

        setPersonajes(datos.results);
    }

    const handleCargarbySpecies = e => {
        setFiltroEspecie(e.target.value);
    }


    const handleCargarbyGender = e => {
        setFiltroGenero(e.target.value);
        filtrarGenero(e.target.value);
    }

    const filtrarGenero = (generoPersonaje) => {
        let resultGenero = personajes.filter((item) => {
            if(generoPersonaje === 'female'){
                return item.gender === 'female';
            }else if(generoPersonaje === 'male'){
                return item.gender === 'male';
            }else if(generoPersonaje === 'genderless'){
                return item.gender === 'genderless';
            }else if(generoPersonaje === 'unknown'){
                return item.gender === 'unknown';
            }else{
                return item;
            }
        });
        setPersonajes(resultGenero);
    }

    const handleCargarbyStatus = e => {
        setFiltroEstado(e.target.value);
        filtrarEstado(e.target.value);
    }

    const filtrarEstado = (estadoPersonaje) => {
        let resultEstado = personajes.filter((item) => {
            if(estadoPersonaje === 'alive'){
                return item.status === 'alive';
            }else if(estadoPersonaje === 'dead'){
                return item.status === 'dead';
            }else if(estadoPersonaje === 'unknown'){
                return item.status === 'unknown';
            }else{
                return item;
            }
        });
        setPersonajes(resultEstado);
    }

    useEffect(() => {
        obtenerPersonajes();
    }, [])
    
    
    
    return(
        <div className="row">
            
            <div className="content-select">
                <div>
                <select onChange={handleCargarbySpecies} placeholder="Especies">
                    <option value="0">Especie</option>
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
                <div>
                <select value={filtroGenero} onChange={handleCargarbyGender} placeholder="Especies">
                    <option value="female">Femenino</option>
                    <option value="male">Masculino</option>
                    <option value="genderless">Sin genero</option>
                    <option value="unknown">Desconocido</option>
                </select>
                </div>
                <div>
                <select value={filtroEstado} onChange={handleCargarbyStatus} placeholder="Especies">
                    <option value="alive">Vivo</option>
                    <option value="dead">Muerto</option>
                    <option value="unknown">Desconocido</option>
                </select>
                </div>
            </div>

            {
                personajes.map((personaje, indice) => {
                    return <TarjetaPersonaje key={indice} {...personaje} />
                })
            }
            
        </div>
    )
    
}