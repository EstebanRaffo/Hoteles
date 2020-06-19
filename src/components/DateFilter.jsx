import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DateFilter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { date, icon, name, onDateChange } = this.props;
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" onChange={onDateChange} value={date} name={name}/> 
                    <span className="icon is-small is-left">
                        {/* <FontAwesomeIcon icon={`fas ${this.props.icon}`} /> */}
                        <i className={`fas ${icon}`}></i>
                       
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