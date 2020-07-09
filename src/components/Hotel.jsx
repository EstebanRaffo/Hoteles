import React, { Component } from "react";
import DataTag from "./DataTag";
import Costo from "./Costo";


class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleHotel: {
        margin: "20px"
      }
    };
  }

  render() {
    const {slug, name, photo, description, city, country, rooms, price } = this.props;
    const {styleHotel} = this.state;
    return (
      <div className="column is-one-third">
        <div className="card" style={styleHotel}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={photo} alt={name} />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{name}</p>
            <p>
              {description}
            </p>
            <div className="field is-grouped is-grouped-multiline" style={{ marginTop: "1em" }}>
              <DataTag icon="fa-map-marker" name="city" city={city} country={country}/>
              <DataTag icon="fa-bed" name="rooms" rooms={rooms} />
              <Costo price={price}/>
            </div>
          </div>
          <div className="card-footer">
            <a href={"/" + slug} className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
              Reservar
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hotel;
