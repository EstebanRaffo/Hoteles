import React, { Component } from 'react';
import DateFilter from "./DateFilter";
// import { select } from 'react-bulma';

class Filtros extends Component{
    constructor(props){
        super(props);

        this.state = {
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


    render(){
        return(
            <nav style={this.state.estilosNavVar} class="navbar" role="navigation" aria-label="main navigation">
                <div style={this.state.estilosItem} class="navbar-item">
                    <DateFilter tipo="fa-sign-in-alt" fecha={this.props.filters.dateFrom}/>
                </div>
                <div style={this.state.estilosItem} class="navbar-item">
                    <DateFilter tipo="fa-sign-out-alt" fecha={this.props.filters.dateTo}/>
                </div>

                <div style={this.state.estilosItem} class="navbar-item">
                    <select>
                        <option value="0">Todos los paises</option>
                    </select>
                </div>
                <div style={this.state.estilosItem} class="navbar-item">
                    <select>
                        <option value="0">Cualquier Precio</option>
                    </select>
                </div>
                <div style={this.state.estilosItem} class="navbar-item">
                    <select>
                        <option value="0">Cualquier Tamaño</option>
                    </select>
                </div>
            </nav>
        );
    }
}

export default Filtros;