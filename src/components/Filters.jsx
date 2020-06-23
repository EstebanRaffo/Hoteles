import React, { Component } from 'react';
import DateFilter from "./DateFilter";
import OptionsFilter from "./OptionsFilter";

// import moment from "moment";


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
            from: '',
            to: ''
        };
        this.onOptionChange = this.onOptionChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }

    // Si lo analizas con atención podrás notar que el método tiene una funcionalidad muy simple, tomar el valor del objeto filters y 
    // reemplazar el valor del atributo que corresponde al nombre del input o el select que está disparando el evento. Una vez
    // reemplazado ese dato simplemente llama a la función onFilterChange que recibe como prop y de la cual definiremos el 
    // comportamiento en el componente App.
    // handleOptionChange(event)
    onOptionChange(event){   
        let payload = this.props.filters;
        payload[event.target.name] = event.target.value;
      
        this.props.onFilterChange(payload);
    }

    onDateChange(event){
        let payload = this.props.filters;
    
        if(payload.dateTo >= payload.dateFrom){
            payload[event.target.name] = event.target.value;
            this.props.onFilterChange(payload);
        }
        else{
            this.setState({from: payload.dateTo, to: payload.dateTo})
            payload.dateFrom = this.state.from;
            payload.dateTo = this.state.to;
            payload[event.target.name] = event.target.value;
            this.props.onFilterChange(payload);
        }
    }

    // filters: {
    //     dateFrom: Moment(new Date()).format("YYYY-MM-DD"),
    //     dateTo: Moment().add(1, "month").format("YYYY-MM-DD"),
    //     country: "",
    //     price: 0,
    //     rooms: 0
    // },

    // 1.4  Guía: Filtros (Parte 2) Checkpoint
    // Si todo salió bien, ya puedes poner a prueba el comportamiento de los eventos del componente Filters y sus hijos al ver cómo éstos 
    // modifican el state del componente App a medida que reciben cambios por parte del usuario.
    // También deberías ver estos cambios de datos reflejados en el componente Hero que creaste anteriormente.
    // Por último, si quieres asegurarte de que todo está funcionando correctamente, puedes monitorear el state de tu aplicación durante 
    // su ejecución usando React Developer Tools 
    render(){
        return(
         
            <nav className="navbar is-info" style={this.state.estilosNavVar}>
                <div className="navbar-item" style={this.state.estilosItem}>
                    <DateFilter
                        date={this.props.filters.dateFrom}
                        icon="fa-sign-in-alt" 
                        onDateChange = {this.onDateChange}
                        name="dateFrom"/>
                </div>
        
                <div className="navbar-item" style={this.state.estilosItem}>
                    <DateFilter
                        date={ this.props.filters.dateTo }
                        icon="fa-sign-out-alt" 
                        onDateChange = {this.onDateChange}
                        name="dateTo"/>
                </div>
             
                <div className="navbar-item" style={this.state.estilosItem}>
                    <OptionsFilter
                        options = { [ {value: '', name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] } 
                        selected = { this.props.filters.country }
                        icon = "fa-globe" 
                        onOptionChange = {this.onOptionChange}
                        name="country"/>
                </div>
    
                <div className="navbar-item" style={this.state.estilosItem}>
                    <OptionsFilter
                        options = { [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                        selected = { this.props.filters.price }
                        icon = "fa-dollar-sign" 
                        onOptionChange = {this.onOptionChange}
                        name="price"/>
                </div>
           
                <div className="navbar-item" style={this.state.estilosItem}>
                    <OptionsFilter
                        options = { [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                        selected = { this.props.filters.rooms }
                        icon = "fa-bed" 
                        onOptionChange = {this.onOptionChange}
                        name="room"/>
                </div>
            </nav>
        );
    }

}

export default Filters;

// 1.3  Guía: Filtros (Parte 1) 
// Componente Filters
// Para finalizar debemos crear un componente Filters, que luego agregaremos al componente App para mostrar todos los filtros posibles.

// Teniendo en cuenta los componentes desarrollados en esta guía, debería contener una estructura similar a la siguiente.
{/* <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
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
</nav> */}