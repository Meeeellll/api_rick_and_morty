import React, { Component } from "react";
import Estilos from "../Estilos.css";

export default class Sidebar extends Component {
    
    render(){
        return(
            <nav className="sidebar">
                <header>
                    <div className="carrusel-sidebar">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="..." class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="..." class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="..." class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="links-paginas">
                    <ul>
                        <li><span><i class="fi fi-rr-home"></i></span>Inicio</li>
                        <li>Episodios</li>
                        <li>Lugares</li>
                    </ul>
                </div>
            </nav>
        )
    }
}