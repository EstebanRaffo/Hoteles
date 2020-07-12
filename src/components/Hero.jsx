import React, { Component } from 'react';
import Moment from "moment";


class Hero extends Component{
    constructor(props){
        super(props);
        this.state = {
            style: {
                backgroundColor: "#43d8c9",
                color: "white",
                padding: "30px",
                margin: "20px 20px 0px"
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
                        desde el 
                        <strong> {Moment(filters.dateFrom).format("dddd, D [de] MMMM [del] YYYY")} </strong> 
                        hasta el <strong>{Moment(filters.dateTo).format("dddd, D [de] MMMM [del] YYYY")}</strong>                
                    </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;