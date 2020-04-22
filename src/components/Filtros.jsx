import React, { Component } from 'react';
import DateFilter from "./DateFilter";
// import { select } from 'react-bulma';

class Filtros extends Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-item">
                    <DateFilter tipo="fa-sign-in-alt" fecha={this.props.filters.dateFrom}/>
                </div>
                <div class="navbar-item">
                    <DateFilter tipo="fa-sign-out-alt" fecha={this.props.filters.dateTo}/>
                </div>

                <div class="navbar-item">
                    <div class="field">
                        <div class="control">
                            <div class="select is-info">
                                <select>
                                    <option value="0">Todos los paises</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar-item">
                    <select>
                        <option value="0">Cualquier Precio</option>
                    </select>
                </div>
                <div class="navbar-item">
                    <select>
                        <option value="0">Cualquier Tamaño</option>
                    </select>
                </div>
            </nav>
        );
    }
}

export default Filtros;