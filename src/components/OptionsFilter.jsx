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
        this.setState(state => ({
            selected: event.target.value
        }));
    };

    componentDidMount(){
        const listItems = this.props.options.map((option) =>
            <option>{option}</option>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default OptionsFilter;