import React, {Component} from "react";

import Hotel from "./Hotel";

class Hoteles extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    warning = () => {
        return (
          <article className="message is-warning">
            <div className="message-body">
              No se han encontrado hoteles con los criterios definidos
            </div>
          </article>
        );
    }

    render(){
        const {hotels, isAllLoaded} = this.props;
        
        return(
            <div className="column is-one-third">
            {isAllLoaded ?                 
                hotels.map(hotel => (
                    <Hotel
                        name={hotel.name}
                        photo={hotel.photo}
                        description={hotel.description}
                        city={hotel.city}
                        country={hotel.country}
                        rooms={hotel.rooms}
                        price={hotel.price}
                    />
                ))
                : (
                    this.warning
                )}
            </div>
        )
    }
}

export default Hoteles;