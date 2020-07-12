import React, {Component} from "react";

import Hotel from "./Hotel";

class Hoteles extends Component{
    constructor(props){
        super(props);
        this.state = {
            styleHotels: {
                background: "#7caaf8bb",
                margin: "0px 20px",
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
        const {hotels} = this.props;
        const {styleHotels} = this.state;
        return(
            <section className="section" style={ styleHotels }>
                <div className="container">
                    <div className="columns is-multiline">
                        {hotels.length > 0 ?                 
                            hotels.map(hotel => (
                                <Hotel
                                    key={hotel.slug}
                                    slug={hotel.slug}
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
                                this.warning()
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Hoteles;