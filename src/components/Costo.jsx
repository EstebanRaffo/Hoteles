import React, {Component} from "react";

class Costo extends Component{
    constructor(props){
        super(props);
        this.state = {
            cost: []
        }
    }

    componentDidMount(){
        const {price} = this.props;
        const {cost} = this.state;
        for(let i = 0; i < 4; i++){
            cost.push(i <= price);
        }
        this.setState({cost});
    }

    render(){
        const {cost} = this.state;
        return(
            <div className="control">
              <div className="tags">
                <span className="tag is-medium is-info">
                {cost.map(isTrue => 
                    isTrue ? (
                        <i className="fas fa-dollar-sign" style={{ margin: "0 .125em" }}></i>  
                    ) : (
                        <i className="fas fa-dollar-sign" style={{ margin: "0 .125em", opacity: ".25" }}></i>
                    )
                )}
                </span>
              </div>
            </div>
        );
    }
}

export default Costo;