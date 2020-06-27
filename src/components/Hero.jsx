import React, { Component } from 'react';
import Moment from "moment";


class Hero extends Component{
    constructor(props){
        super(props);

        this.state = {
            estilos: {
                backgroundColor: "#43d8c9",
                color: "white",
                padding: "30px",
                margin: "20px 20px 0px"
            }
        };
    }

    
    render(){
        return(
            <section style={this.state.estilos} className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
                    desde el 
                    <strong> {Moment(this.props.filters.dateFrom).format("D [de] MMMM [del] YYYY")} </strong> 
                    hasta el <strong>{Moment(this.props.filters.dateTo).format("D [de] MMMM [del] YYYY")}</strong>
                    {/* {Moment.locale()}  */}
                    {/* desde el <strong>dddd, DD de mmmm de AAAA</strong> hasta el <strong>dddd, DD de mmmm de AAAA</strong> */}
                    </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;