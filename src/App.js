import React, { Component, Fragment } from 'react';
import './App.css';
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import Hoteles from "./components/Hoteles";
import Moment from "moment";
import "moment/locale/es";

import {hotelsData} from "./scripts/data";

class App extends Component{
  constructor(props){
    super(props);
    // 1.6  Guía: Listando Hoteles
    this.state = {
      filters: {
        dateFrom: Moment(new Date()).format("YYYY-MM-DD"),
        dateTo: Moment().add(1, "month").format("YYYY-MM-DD"),
        country: "",
        price: 0,
        room: 0
      },
      hotels: hotelsData,
      filteredHotels: hotelsData,
      isAllLoaded: true
    };
  }

  handleFilterChange = (payload) => {
    const newFilteredHotels = this.filterHotels(payload, this.state.hotels);

    this.setState({
      filters: payload,
      filteredHotels: newFilteredHotels
    });
  }

  filterHotels(payload, hotels) {
    return hotels.filter(hf => {
      return (hf.rooms <= (payload.rooms !== 'select' ? payload.rooms : hf.rooms))
    })
  }


  render(){
    const {filters, filteredHotels, isAllLoaded} = this.state;
    return(
      <Fragment>
         <Hero filters={filters} />
         <Filters filters={filters} onFilterChange = {this.handleFilterChange} />
         <Hoteles hotels={filteredHotels} isAllLoaded={isAllLoaded}/> 
      </Fragment>  
    );  
  }
}


export default App;
