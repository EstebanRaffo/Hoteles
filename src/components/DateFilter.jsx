import React, { Component } from 'react';

class DateFilter extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const { date, icon, name, onDateChange } = this.props;
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" onChange={onDateChange} value={date} name={name}/> 
                    <span className="icon is-small is-left">
                        <i className={`fas ${icon}`}></i>
                    </span>
                </div>
            </div>
        );
    }
}

export default DateFilter;