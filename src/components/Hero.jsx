import React, { Component } from 'react';


class Hero extends Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
                    desde el <strong>{this.props.filters.dateFrom}</strong> hasta el <strong>{this.props.filters.dateTo}</strong>
                        {/* desde el <strong>dddd, DD de mmmm de AAAA</strong> hasta el <strong>dddd, DD de mmmm de AAAA</strong> */}
                    </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;