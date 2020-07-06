import React, {Component} from "react";

import Hotel from "./Hotel";

class Hoteles extends Component{
    constructor(props){
        super(props);
        this.state = {
            styleHotels: {
                display: "flex",
                background: "#7caaf8bb",
                margin: "0px 20px",
                padding: "40px",
                flexWrap: "wrap",
                alignContent: "flex-start"
            }, 
        }
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
        const {styleHotels} = this.state;
        return(
            <div style={styleHotels}>
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