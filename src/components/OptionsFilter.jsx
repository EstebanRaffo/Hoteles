import React, { Component } from 'react';

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
            lista: []
        }
        aux.lista = this.props.options;
        const listItems = aux.lista.map((option) =>
            <option value={option.value}>{option.name}</option>
        );

        this.setState(state => ({
            options: listItems
        }));
    }

    handleChange = (event) => {
        this.setState({selected: event.target.value});
        this.props.onOptionChange(event);
    }


    render(){
        const { options, selected, icon, defaultSel, label, name} = this.props;
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                        <select style={ {width: '100%'} } onChange={this.handleChange} value={this.state.selected} name={name}> 
                            {this.state.options}
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