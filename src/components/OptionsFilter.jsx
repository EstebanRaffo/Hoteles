import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class OptionsFilter extends Component{
    constructor(props){
        super(props);

        this.state = {
            selected: '',
            options: ''
        };
    }


    componentDidMount(){
        const aux = {
            lista: ''
        }
        aux.lista = this.props.options;
        const listItems = aux.lista.map((option) =>
            <option>{option.name}</option>
        );

        this.setState(state => ({
            options: listItems
        }));
    }


    render(){
        const { options, selected, icon, defaultSel, label, name, onOptionChange } = this.props;
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                        <select style={ {width: '100%'} } onChange={onOptionChange} value={this.state.selected} name={name}> 
                            {this.state.options}
                        </select>
                    </div>
                    <div className="icon is-small is-left">
                        {/* <FontAwesomeIcon = {`fas ${this.props.icon}`} /> */}
                        <i className={`fas ${icon}`}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default OptionsFilter;