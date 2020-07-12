import React, { Component } from 'react';
import DateFilter from "./DateFilter";
import OptionsFilter from "./OptionsFilter";


class Filters extends Component{
    constructor(props){
        super(props);
        this.state = {
            estilosNavVar: {
                backgroundColor: "#0779e4",
                margin: "0px 20px",
                justifyContent: 'center'    
            },
            estilosItem: {
                display: "inline-block"
            }, 
        };
    }

    onDateChange = (event) => {
        var {filters, onFilterChange} = this.props;
        filters[event.target.name] = event.target.value;
    
        if(filters.dateTo >= filters.dateFrom){
            onFilterChange(event);
        }
    }


    render(){
        const {estilosItem, estilosNavVar} = this.state;
        const {filters, onFilterChange} = this.props;
        const countryOptions = [ 
            {value: 0, name: 'Todos los países'}, 
            {value: 'Argentina', name: 'Argentina'}, 
            {value: 'Brasil', name: 'Brasil'}, 
            {value: 'Chile', name: 'Chile'}, 
            {value: 'Uruguay', name: 'Uruguay'} 
        ];
        const priceOptions = [
            {value: 0, name: 'Cualquier precio'}, 
            {value: 1, name: '$'}, 
            {value: 2, name: '$$'}, 
            {value: 3, name: '$$$'}, 
            {value: 4, name: '$$$$'} 
        ];
        const roomOptions = [ 
            {value: 0, name: 'Cualquier tamaño'}, 
            {value: 10, name: 'Hotel pequeño'}, 
            {value: 20, name: 'Hotel mediano'}, 
            {value: 30, name: 'Hotel grande'} 
        ];
        return(
            <nav className="navbar is-info" style={estilosNavVar}>
                <div className="navbar-item" style={estilosItem}>
                    <DateFilter
                        date={filters.dateFrom}
                        icon="fa-sign-in-alt" 
                        onDateChange = {this.onDateChange}
                        name="dateFrom"/>
                </div>
        
                <div className="navbar-item" style={estilosItem}>
                    <DateFilter
                        date={filters.dateTo}
                        icon="fa-sign-out-alt" 
                        onDateChange = {this.onDateChange}
                        name="dateTo"/>
                </div>
             
                <div className="navbar-item" style={estilosItem}>
                    <OptionsFilter
                        options = {countryOptions} 
                        selected = {filters.country}
                        icon = "fa-globe" 
                        onOptionChange = {onFilterChange}
                        name="country"/>
                </div>
    
                <div className="navbar-item" style={estilosItem}>
                    <OptionsFilter
                        options = {priceOptions}
                        selected = {filters.price}
                        icon = "fa-dollar-sign" 
                        onOptionChange = {onFilterChange}
                        name="price"/>
                </div>
           
                <div className="navbar-item" style={estilosItem}>
                    <OptionsFilter
                        options = {roomOptions}
                        selected = {filters.rooms}
                        icon = "fa-bed" 
                        onOptionChange = {onFilterChange}
                        name="room"/>
                </div>
            </nav>
        );
    }
}

export default Filters;