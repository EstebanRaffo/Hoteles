import React, { Component } from 'react';
import DateFilter from "./DateFilter";
import OptionsFilter from "./OptionsFilter";
// import { select } from 'react-bulma';

class Filtros extends Component{
    constructor(props){
        super(props);

        this.state = {
            rooms: '',
            paises: '',
            precios:'',
            estilosNavVar: {
                backgroundColor: "#0779e4",
                padding: "15px",
                margin: "0px 20px",
                justifyContent: 'center'    
            },
            estilosItem: {
                display: "inline-block",
                margin: "0px 10px"
            }
        };
    }

    // componentDidMount(){

    //     this.setState(state => ({
    //       rooms: [
    //         { value: undefined, name: 'Cualquier tamaño' },
    //         { value: 10, name: 'Hotel pequeño' },
    //         { value: 20, name: 'Hotel mediano' },
    //         { value: 30, name: 'Hotel grande' }
    //       ]
    //     }))
    // }

    // 1.3  Guía: Filtros (Parte 1) Componente Filters
    render(){
        return(
            <nav className="navbar is-info" style={this.state.estilosNavVar}>
                <div className="navbar-item" style={this.state.estilosItem}>
                    <DateFilter
                        date={ this.props.filters.dateFrom}
                        icon="sign-in-alt" />
                </div>
                <div className="navbar-item" style={this.state.estilosItem}>
                    <DateFilter
                        date={ this.props.filters.dateTo }
                        icon="sign-out-alt" />
                </div>
                <div className="navbar-item" style={this.state.estilosItem}>
                    <OptionsFilter
                        options = { [ {value: '', name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] } 
                        selected = { this.props.filters.country }
                        icon = "globe" />
                </div>
                <div className="navbar-item" style={this.state.estilosItem}>
                    <OptionsFilter
                        options = { [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                        selected = { this.props.filters.price }
                        icon = "dollar-sign" />
                </div>
                <div className="navbar-item" style={this.state.estilosItem}>
                    <OptionsFilter
                        options = { [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                        selected = { this.props.filters.rooms }
                        icon = "bed" />
                </div>
            </nav>
        );
    }

}

export default Filtros;