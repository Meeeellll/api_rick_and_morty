import React, { useState, useEffect } from "react";
//import Estado from "./Filters/Categorias/Estado";
//import Filter from "./Filters/Filter";
import TarjetaPersonaje from "./TarjetaPersonaje";
//import Especie from "./Filters/Categorias/Especie";

export default function PersonajesInfo(){

    const [personajes, setPersonajes] = useState([]);
    //let [estado, setEstado] = useState([]);
    /**const [especie, setEspecie] = useState("");

    const filtrarEspecie = (e) => {
        console.log(e.target.value);
        setEspecie(e.target.value);
    }*/


    // const [contador, setContador] = useState(0);
    let api = `https://rickandmortyapi.com/api/character`;

    const obtenerPersonajes = async () => {
        let resultado = await fetch(api);
        let datos = await resultado.json();

        //console.log(datos);

        setPersonajes(datos.results);
    }

    /** FILTRO */

    const [filtro, setFiltro] = useState("");

    const filtrarEspecie = (e) => {
        console.log(e.target.value);
        setFiltro(e.target.value);
    }

    console.log(filtro);

    

    useEffect(() => {
        obtenerPersonajes();
    }, []);
    
    
    
    return(
        <div className="row">
            
            <div className="content-select">
                <select onChange={filtrarEspecie} placeholder="Especies">
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
        
            
            
                {/**personajes.map((personaje, indice) => {
                    return <TarjetaPersonaje key={indice} {...personaje} />
                })*/}
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

/** 2 */

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

    let api = `https://rickandmortyapi.com/api/character`;

    const obtenerPersonajes = async () => {
        let resultado = await fetch(api);
        let datos = await resultado.json();

        //console.log(datos);

        setPersonajes(datos.results);
    }

    const handleCargarbySpecies = e => {
        setFiltroEspecie(e.target.value);
        filtrarEspecie(e.target.value);
    }

    const filtrarEspecie = (especiesPersonaje) => {
        let resultEspecie = personajes.filter((item) => {
            if(especiesPersonaje === 'Humanoid'){
                return item.species === 'Humanoid';
            }else if(especiesPersonaje === 'Alien'){
                return item.species === 'Alien';
            }else if(especiesPersonaje === 'Human'){
                return item.species === 'Human';
            }else if(especiesPersonaje === 'Mythological Creature'){
                return item.species === 'Mythological Creature';
            }else if(especiesPersonaje === 'unknown'){
                return item.species === 'unknown';
            }else if(especiesPersonaje === 'Poopybutthole'){
                return item.species === 'Poopybutthole';
            }else if(especiesPersonaje === 'Animal'){
                return item.species === 'Animal';
            }else if(especiesPersonaje === 'Robot'){
                return item.species === 'Robot';
            }else if(especiesPersonaje === 'Cronenberg'){
                return item.species === 'Cronenberg';
            }else if(especiesPersonaje === 'Disease'){
                return item.species === 'Disease';
            }else{
                return item;
            }
        });
        setPersonajes(resultEspecie);
    }

    useEffect(() => {
        obtenerPersonajes();
    }, [])
    
    
    
    return(
        <div className="row">
            
            <div className="content-select">
                <select value={filtroEspecie} onChange={handleCargarbySpecies} placeholder="Especies">
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

            {
                personajes.map((personaje, indice) => {
                    return <TarjetaPersonaje key={indice} {...personaje} />
                })
            }
            
        </div>
    )
    
}