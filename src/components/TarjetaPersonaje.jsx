import React from "react";

export default function TarjetaPersonaje(props){

    return(
        <div className="col-md-3">
            <div className="card mt-5">
                <div className="card-header">
                    <img src={props.image} alt={props.name} className="image-cards" />
                </div>
                <div className="card-body">
                    <p className="nombres-card"> {props.name} </p>
                    <p><b>Especie:</b> {props.species} </p>
                    <p><b>Status:</b> {props.status} </p>
                </div>
                <div className="card-footer">
                    <a href="/" class="btn btn-primary boton-tarjetas">LEER MÁS</a>
                </div>
            </div>

            <div className='row'>
                {/**
                    props.personajes.filter((propiedad) => {
                    return propiedad.species.includes(<CategoriasHome value={props.filtro} />)
                    })
                */}
                {/**
                    props.personajes.filter((<CategoriasHome />))
            */}
            </div>
        </div>
    )
}