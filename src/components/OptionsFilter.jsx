import React, { Component } from 'react';

class OptionsFilter extends Component{
    constructor(props){
        super(props);

        this.state = {
            selected: '',
            options: ''
        };
    }

    handleChange = (event) => {
        this.setState((state) => ({
            selected: event.target.value
        }));
    };

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
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                        <select style={ {width: '100%'} } value={this.state.selected} onChange={this.handleChange}>
                            {this.state.options}
                        </select>
                    </div>
                    <div className="icon is-small is-left">
                        <i className="fas"></i>
                        {/* <i className={this.props.icon}></i> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default OptionsFilter;