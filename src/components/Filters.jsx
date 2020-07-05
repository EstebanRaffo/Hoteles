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

    onOptionChange = (event) => {   
        let payload = this.props.filters;
        payload[event.target.name] = event.target.value;
      
        this.props.onFilterChange(payload);
    }

    onDateChange = (event) => {
        let payload = this.props.filters;
    
        if(payload.dateTo >= payload.dateFrom){
            payload[event.target.name] = event.target.value;
            this.props.onFilterChange(payload);
        }
        // else{
        //     payload.dateFrom = payload.dateTo;
        //     payload[event.target.name] = event.target.value;
        //     this.props.onFilterChange(payload);
        // }
    }

    // filters: {
    //     dateFrom: Moment(new Date()).format("YYYY-MM-DD"),
    //     dateTo: Moment().add(1, "month").format("YYYY-MM-DD"),
    //     country: "",
    //     price: 0,
    //     rooms: 0
    // },


    render(){
        const {estilosItem, estilosNavVar} = this.state;
        const {filters} = this.props;
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
                        options = { [ {value: '', name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] } 
                        selected = {filters.country}
                        icon = "fa-globe" 
                        onOptionChange = {this.onOptionChange}
                        name="country"/>
                </div>
    
                <div className="navbar-item" style={estilosItem}>
                    <OptionsFilter
                        options = { [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                        selected = {filters.price}
                        icon = "fa-dollar-sign" 
                        onOptionChange = {this.onOptionChange}
                        name="price"/>
                </div>
           
                <div className="navbar-item" style={estilosItem}>
                    <OptionsFilter
                        options = { [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                        selected = {filters.rooms}
                        icon = "fa-bed" 
                        onOptionChange = {this.onOptionChange}
                        name="room"/>
                </div>
            </nav>
        );
    }
}

export default Filters;