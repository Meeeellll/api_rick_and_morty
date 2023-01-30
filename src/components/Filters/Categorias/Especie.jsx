import React from "react";
import TarjetaPersonaje from "../../TarjetaPersonaje";

export default function Especie( { setEspecie } ){
    return (
        <div className="row">
                <select onChange={setEspecie} placeholder="Especies" name="especiesSelect">
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

                {/**
                    especie.map((items, indice, task) => {
                        return <TarjetaPersonaje items={items} key={indice} {...personaje} />
                    })
                */}
        </div>
    );
}
