import React from "react";

const Estado = ({ setEstado }) => {
    return (
        <div className="row">
            <div>
                <select /**onChange={filtrarEstado}*/>
                    <option value="alive">Vivo</option>
                    <option value="dead">Muerto</option>
                    <option value="unknown">Desconocido</option>
                </select>
            </div>
        </div>
    );
};

export default Estado