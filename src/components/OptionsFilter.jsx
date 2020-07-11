import React, { Component } from 'react';

class OptionsFilter extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const { icon, name, selected, options, onOptionChange} = this.props;
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                        <select style={ {width: '100%'} } onChange={onOptionChange} value={selected} name={name}> 
                            {options.map((option) => (
                                <option key={option.value}>{option.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="icon is-small is-left">
                        <i className={`fas ${icon}`}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default OptionsFilter;