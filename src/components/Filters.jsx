import React, { Component } from 'react';
import DateFilter from "./DateFilter";
import OptionsFilter from "./OptionsFilter";
// import { select } from 'react-bulma';

class Filters extends Component{
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

    // Si lo analizas con atención podrás notar que el método tiene una funcionalidad muy simple, tomar el valor del objeto filters y 
    // reemplazar el valor del atributo que corresponde al nombre del input o el select que está disparando el evento. Una vez
    // reemplazado ese dato simplemente llama a la función onFilterChange que recibe como prop y de la cual definiremos el 
    // comportamiento en el componente App.
    onOptionChange = (event) => {
        let payload = this.props.filters;
        // console.log(payload)   
        payload[event.target.name] = event.target.value;
      
        this.props.onFilterChange(payload);
    }

    onDateChange = (event) => {
        let payload = this.props.filters;
        // console.log(payload)
        if(payload.dateTo >= payload.dateFrom){
            payload[event.target.name] = event.target.value;
            this.props.onFilterChange(payload);
        }
      
    }

    // 1.4  Guía: Filtros (Parte 2) Checkpoint
    render(){
        return(
            <nav className="navbar is-info" style={this.state.estilosNavVar}>
                <div className="navbar-item" style={this.state.estilosItem}>
                    <DateFilter
                        date={ this.props.filters.dateFrom}
                        icon="sign-in-alt" 
                        onDateChange = {this.onDateChange}/>
                </div>
                <div className="navbar-item" style={this.state.estilosItem}>
                    <DateFilter
                        date={ this.props.filters.dateTo }
                        icon="sign-out-alt" 
                        onDateChange = {this.onDateChange}/>
                </div>
                <div className="navbar-item" style={this.state.estilosItem}>
                    <OptionsFilter
                        options = { [ {value: '', name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] } 
                        selected = { this.props.filters.country }
                        icon = "globe" 
                        onOptionChange = {this.onOptionChange}/>
                </div>
                <div className="navbar-item" style={this.state.estilosItem}>
                    <OptionsFilter
                        options = { [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                        selected = { this.props.filters.price }
                        icon = "dollar-sign" 
                        onOptionChange = {this.onOptionChange}/>
                </div>
                <div className="navbar-item" style={this.state.estilosItem}>
                    <OptionsFilter
                        options = { [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                        selected = { this.props.filters.rooms }
                        icon = "bed" 
                        onOptionChange = {this.onOptionChange}/>
                </div>
            </nav>
        );
    }

}

export default Filters;