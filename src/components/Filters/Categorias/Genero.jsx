import React from "react";

const Genero = () => {
    return (
        <div className="row">
            <div>
                <select /**onChange={filtrarGenero}*/>
                    <option value="female">Femenino</option>
                    <option value="male">Masculino</option>
                    <option value="genderless">Sin genero</option>
                    <option value="unknown">Desconocido</option>
                </select>
            </div>
        </div>
    );
};

export default Genero