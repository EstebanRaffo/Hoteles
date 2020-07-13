import React, { Component } from 'react';
import Moment from "moment";


class Hero extends Component{
    constructor(props){
        super(props);
        this.state = {
            style: {
                backgroundColor: "#43d8c9",
                color: "white",
                margin: "0px 20px 0px"
            }
        };
    }

    
    render(){
        const {filters} = this.props;
        const {style} = this.state;
        return(
            <section style={style} className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Hoteles</h1>
                        <h2 className="subtitle">
                            {filters.country !== "Todos los países" && filters.country !== 0 && 
                                (<strong className="subtitle">en {`${filters.country}  `}</strong>)} 
                            disponibles desde el 
                            <strong> {Moment(filters.dateFrom).format("dddd, D [de] MMMM [del] YYYY")} </strong> 
                            hasta el <strong>{Moment(filters.dateTo).format("dddd, D [de] MMMM [del] YYYY")}</strong>                
                        </h2>
                        {filters.price !== 0 && filters.price !== "Cualquier precio" &&
                            (<h3 className="subtitle"><strong>Precio: {filters.price}</strong></h3>)}
                        {filters.room !== 0 && filters.room !== "Cualquier tamaño" &&
                            (<h3 className="subtitle">
                                <strong>
                                    Tamaño: {filters.room === "Hotel pequeño" ? `${filters.room} (hasta 15 habitaciones)` :
                                            filters.room === "Hotel mediano" ? `${filters.room} (entre 16 y 30 habitaciones)` :
                                            filters.room === "Hotel grande" ? `${filters.room} (más de 30 habitaciones)` : ""
                                    }
                                </strong>
                            </h3>)}
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;