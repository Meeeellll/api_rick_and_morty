import React from "react";

const filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {
    const status = ["Alive", "Dead", "Unknown"];
    const genders = ["female", "male", "genderless", "unknown"];
    const species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
    ];

    const handleCargarbyGender = e => {
        setGender(e.target.value);
    }

    return(
        <div className="filterGroup">
            <div className="">
                <select onClick={handleCargarbyGender} >
                    <option value="female">Femenino</option>
                    <option value="male">Masculino</option>
                    <option value="genderless">Sin genero</option>
                    <option value="unknown">Desconocido</option>
                </select>
            </div>
        </div>
    )
}