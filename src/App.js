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
        country: 0,
        price: 0,
        room: 0
      },
      hotels: hotelsData,
      filteredHotels: [],
      isAllLoaded: true
    };
  }

  componentDidMount(){
    const {filters, hotels} = this.state; 
    const filteredHotels = this.filterByDates(hotels, filters.dateFrom, filters.dateTo);
    this.setState({filteredHotels});
  }

  handleFilterChange = (payload) => {
    const newFilteredHotels = this.filterHotels(payload, this.state.hotels);

    newFilteredHotels.length > 0 ? 
      this.setState({
        filters: payload,
        filteredHotels: newFilteredHotels,
        isAllLoaded: true
      }) 
      : 
      this.setState({
        filters: payload,
        isAllLoaded: false
      })
  }

  filterHotels = (filters, hotels) => {

    const filteredHotelsByDate = this.filterByDates(hotels, filters.dateFrom, filters.dateTo);
    var filteredHotels = filteredHotelsByDate;

    if(filters.room){
      const filteredHotelsByRoom = this.filterByRoom(filteredHotels, filters.room);
      filteredHotels = filteredHotelsByRoom;
    }
    if(filters.price){
      const filteredHotelsByPrice = this.filterByPrice(filteredHotels, filters.price);
      filteredHotels = filteredHotelsByPrice;
    }
    if(filters.country){
      const filteredHotelsByCountry = this.filterByCountry(filteredHotels, filters.country);
      filteredHotels = filteredHotelsByCountry;
    }
    
    return filteredHotels;
  }

  // availabilityFrom: today.valueOf(),
  // availabilityTo: today.valueOf() + 864000000, // 10 days
  // rooms: 11,
  // country: 'Argentina',
  // price: 4
  filterByDates = (hotels, dateFrom, dateTo) => {
    return hotels.filter(hotel => {
      return Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= dateFrom && Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= dateTo
    })
  }

  filterByRoom = (hotels, size) => {
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
    return hotels.filter(hotel => {
      return hotel.rooms <= size && hotel.rooms > (size - 15);
    })
  } 
  
  filterByPrice = (hotels, price) => {  
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
    const {filters, filteredHotels, isAllLoaded} = this.state;
    console.log(filters)
    console.log(filteredHotels.length)
    console.log(isAllLoaded)
    return(
      <Fragment>
         <Hero filters={filters} />
         <Filters filters={filters} onFilterChange={this.handleFilterChange} />
         <Hoteles hotels={filteredHotels} isAllLoaded={isAllLoaded}/> 
      </Fragment>  
    );  
  }
}


export default App;
