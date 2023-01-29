import React from "react";
import Especie from "../Filters/Categorias/Especie";
import Genero from "../Filters/Categorias/Genero";
import Estado from "../Filters/Categorias/Estado";

const Filter = ({ setEstado, setPageNumber, setEspecie }) => {
    return (
        <div className="col-3">
            <div className="text-center">Filter</div>
            <div>
                <button type="button" class="btn btn-outline-dark">Limpiar</button>
                <Especie setEspecie={setEspecie}/>
                <Genero />
                <Estado setEstado={setEstado}/>
            </div>
            
        </div>
    );
};

export default Filter;