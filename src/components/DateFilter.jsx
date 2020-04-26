import React, { Component } from 'react';

class DateFilter extends Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" value={this.props.fecha}/>
                    <span className="icon is-small is-left">
                        <i className={this.props.icon}></i>
                        {/* <ion-icon name="log-in-outline"></ion-icon> */}
                    </span>
                </div>
            </div>
        );
    }
}

export default DateFilter;