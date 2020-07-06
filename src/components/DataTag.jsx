import React, {Component} from "react";

class DataTag extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const {name, icon} = this.props
        return(
            <div className="control">
              <div className="tags has-addons">
                <span className="tag is-medium is-info">
                  <i className={`fas ${icon}`}></i>
                </span>
                {name === "city" ? (
                    <span className="tag is-medium">{this.props.city}, {this.props.country}</span>
                ) : (
                    <span className="tag is-medium">{this.props.rooms} Habitaciones</span>
                )}
              </div>
            </div>
        )
    }
}

export default DataTag;