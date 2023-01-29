import React from "react";
import FilterOption from "../FilterOption";

const Especie = ({ setEspecie }) => {
    let especies = ["Humanoid", "Alien", "Human", "Mythological Creature", "unknown", "Poopybutthole", "Animal", "Robot", "Cronenberg", "Disease"]
    return (
        <div className="row">
                <select /**onChange={setEspecie}*/>
                    {especies.map((items, index) => (
                        <FilterOption key={index} name="especie" index={index} items={items} />
                    ))}
                    
                    {/**<option value="Humanoid">Humanoide</option>
                    <option value="Alien">Alien</option>
                    <option value="Human">Humano</option>
                    <option value="Mythological Creature">Criatura Mitologica</option>
                    <option value="unknown">Desconocido</option>
                    <option value="Poopybutthole">Poopybutthole</option>
                    <option value="Animal">Animal</option>
                    <option value="Robot">Robot</option>
                    <option value="Cronenberg">Cronenberg</option>
    <option value="Disease">Disease</option>*/}
                </select>
        </div>
    );
};

export default Especie