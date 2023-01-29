import React from "react";

const Especie = ({ setEspecie }) => {
    return (
        <div className="row">
            <div>
                <select onChange={setEspecie}>
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
        </div>
    );
};

export default Especie