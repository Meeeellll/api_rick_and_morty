/**import React, { useState } from 'react';
import PersonajesInfo from './PersonajesInfo';

export default function CategoriasHome(props) {

  /**const [filtro, setFiltro] = useState("");

  const filtrarStatus = (e) => {
    console.log(e.target.value);
    setFiltro(e.target.value);
  }

  console.log(filtro);


  return(
    <div>
      <select onChange={props.filtrarStatus}>
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

      <div>
            {/**
                filter((propiedad) => {
                    return propiedad.status.includes(filtro)
                }).map((personaje, indice) => {
                    return <Personaje key={indice} figura={personaje} /> 
                })
              
        {/**
          propiedad => {
            return propiedad.status.includes(filtro)
        }
      
      </div>
      
    </div>
    
  )
}*/