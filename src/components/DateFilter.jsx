import React, { Component } from 'react';

class DateFilter extends Component{
    constructor(props){
        super(props);
        // this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange = (event) => {
        this.props.onDateChange(event);
    };

    render(){
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" onChange={this.handleDateChange} value={this.props.date} name={this.props.name}/>
                    <span className="icon is-small is-left">
                    <i className={`fas ${this.props.icon}`}></i>
                        {/* <i className="fas" value={this.props.icon}></i> */}
                        {/* <i className={this.props.icon}></i> */}
                        {/* <ion-icon name="log-in-outline"></ion-icon> */}
                        {/* Para mostrar el ícono la solución es simple: con que reciba como parámetro la cadena de texto fa-sign-in-alt para el 
                        caso de la fecha de ingreso y fa-sign-out-alt para la fecha de egreso, ya podríamos concatenar al elemento <i className="fas"></i>
                         dicho valor en el atributo className. */}
                    </span>
                </div>
            </div>
        );
    }
}

export default DateFilter;