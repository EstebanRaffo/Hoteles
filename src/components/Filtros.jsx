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
                margin: "0px 20px"
            },
            estilosItem: {
                display: "inline-block",
                margin: "0px 10px"
            }
        };
    }

    componentDidMount(){
        // cargar array de rooms
        this.setState(state => ({
          rooms: [
            { value: undefined, name: 'Cualquier tamaño' },
            { value: 10, name: 'Hotel pequeño' },
            { value: 20, name: 'Hotel mediano' },
            { value: 30, name: 'Hotel grande' }
          ]
        }))
        // cargar array paises
        // cargar array de precios
    }

    // 1.3  Guía: Filtros (Parte 1) Componente Filters
    render(){
        return(
            <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
                <div className="navbar-item">
                    <DateFilter
                    date={ props.filters.dateFrom}
                    icon="sign-in-alt" />
                </div>
                <div className="navbar-item">
                    <DateFilter
                    date={ props.filters.dateTo }
                    icon="sign-out-alt" />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
                    selected={ props.filters.country }
                    icon="globe" />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                    selected={ props.filters.price }
                    icon="dollar-sign" />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                    selected={ props.filters.rooms }
                    icon="bed" />
                </div>
            </nav>
        );
    }

    // render(){
    //     return(
    //         <nav style={this.state.estilosNavVar} class="navbar" role="navigation" aria-label="main navigation">
    //             <div style={this.state.estilosItem} class="navbar-item">
    //                 <DateFilter icon="fas fa-sign-in-alt" fecha={this.props.filters.dateFrom}/>
    //             </div>
    //             <div style={this.state.estilosItem} class="navbar-item">
    //                 <DateFilter icon="fas fa-sign-out-alt" fecha={this.props.filters.dateTo}/>
    //             </div>
    //             {/* Paises */}
    //             <div style={this.state.estilosItem} class="navbar-item">
    //                 <OptionsFilter icon="globe-outline" options = {this.props.paises} />
    //                 {/* <ion-icon name="globe-outline"></ion-icon> */}
    //             </div>

    //             {/* Precios */}
    //             <div style={this.state.estilosItem} class="navbar-item">
    //                 <OptionsFilter icon="logo-usd" options = {this.props.precios} />
    //                 {/* <ion-icon name="logo-usd"></ion-icon> */}
    //             </div>

    //             {/* Tamaños */}
    //             <div style={this.state.estilosItem} class="navbar-item">
    //                 <OptionsFilter icon="bed-outline" options = {this.props.rooms} />
    //                 {/* <ion-icon name="bed-outline"></ion-icon> */}
    //             </div>
    //         </nav>
    //     );
    // }
}

export default Filtros;