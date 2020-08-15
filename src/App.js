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
   
    this.state = {
      filters: {
        dateFrom: Moment().format("YYYY-MM-DD"),
        dateTo: Moment().add(1, "day").format("YYYY-MM-DD"),
        country: 0,
        price: 0,
        room: 0
      },
      hotels: hotelsData,
      filteredHotels: []
    };
  }

  componentDidMount(){
    const {filters, hotels} = this.state; 
    const filteredHotels = this.filterByDates(hotels, filters.dateFrom, filters.dateTo);
    this.setState({filteredHotels});
  }

  handleFilterChange = (event) => {
    const {name, value} = event.target;
    var {filters} = this.state;
    filters[name] = value;
    this.setState({filters}, this.filterHotels(this.state.filters, this.state.hotels)); 
  }

  filterHotels = (filters, hotels) => {
    var filteredHotels = this.filterByDates(hotels, filters.dateFrom, filters.dateTo);
    
    var size = filters.room;
    switch(size){
      case 'Hotel pequeño': 
        size = 15;
        break;
      case 'Hotel mediano':
        size = 30;
        break;
      case 'Hotel grande':
        size = 45;
        break;
      default:
        size = 0;
        break;
    }
    if(size){
      filteredHotels = this.filterByRoom(filteredHotels, size);
    }

    var price = filters.price;
    switch(price){
      case '$':
        price = 1;
        break;
      case '$$':
        price = 2;
        break;
      case '$$$':
        price = 3;
        break;
      case '$$$$':
        price = 4;
        break;
      default:
        price = 0;
        break;
    }
    if(price){
      filteredHotels = this.filterByPrice(filteredHotels, price);
    }

    if(filters.country !== "Todos los países"){
      filteredHotels = this.filterByCountry(filteredHotels, filters.country);
    }
    
    this.setState({filteredHotels});
  }

  filterByDates = (hotels, dateFrom, dateTo) => {
    return hotels.filter(hotel => {
      return dateFrom >= Moment(hotel.availabilityFrom).format("YYYY-MM-DD") && dateTo <= Moment(hotel.availabilityTo).format("YYYY-MM-DD")
    })
  }

  filterByRoom = (hotels, size) => {
    return hotels.filter(hotel => {
      return hotel.rooms <= size && hotel.rooms > (size - 15);
    })
  } 
  
  filterByPrice = (hotels, price) => { 
    return hotels.filter(hotel => {
      return hotel.price === price;
    })
  }

  filterByCountry = (hotels, country) => {
    return hotels.filter(hotel => {
      return hotel.country === country;
    })
  }

  render(){
    const {filters, filteredHotels, hotels} = this.state;
    console.log(hotels.map(hotel => {
      const availabilityFrom = Moment(hotel.availabilityFrom).format("YYYY-MM-DD")
      const availabilityTo =  Moment(hotel.availabilityTo).format("YYYY-MM-DD")
      return {"Hotel: ": hotel.name, "disponible desde: ": availabilityFrom, "disponible hasta: ": availabilityTo}
    }))
    console.log("Selección: ", filters)
    console.log("Se encontraron", filteredHotels.length, "hoteles: ")
    console.log(
      filteredHotels.map(hotel => {
        const availabilityFrom = Moment(hotel.availabilityFrom).format("YYYY-MM-DD")
        const availabilityTo =  Moment(hotel.availabilityTo).format("YYYY-MM-DD")
        return {"Hotel: ": hotel.name, "disponible desde: ": availabilityFrom, "disponible hasta: ": availabilityTo}
      }))
    return(
      <Fragment>
         <Hero filters={filters} />
         <Filters filters={filters} onFilterChange={this.handleFilterChange} />
         <Hoteles hotels={filteredHotels}/> 
      </Fragment>  
    );  
  }
}

export default App;
