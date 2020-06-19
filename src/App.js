import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero";
import Filters from "./components/Filters";
// import Hoteles from "./components/Hoteles";
import Moment from "moment";
import 'bulma/css/bulma.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      filters: {
        // dateFrom: today,
        // dateTo: new Date(today.valueOf() + 86400000),
        dateFrom: Moment(new Date()).format("YYYY-MM-DD"),
        dateTo: Moment().add(1, "month").format("YYYY-MM-DD"),
        country: "",
        price: 0,
        room: 0
      },
      hotels: [],
      filteredHotels: [],
      isAllLoaded: false
    };
  }

  handleFilterChange = (payload) => {
    this.setState({
      filters: payload
    });
  }

  // https://es.reactjs.org/docs/faq-state.html

  // incrementCount() {
  //   this.setState((state) => {
  //     // Importante: lee `state` en vez de `this.state` al actualizar.
  //     return {count: state.count + 1}
  //   });
  // }

  // this.setState((state, props) => ({
  //   counter: state.counter + props.increment
  // }));


  render(){
    return(
      <Fragment>
         <Hero filters={this.state.filters} />
         <Filters filters={this.state.filters} onFilterChange = {this.handleFilterChange} />
         {/* <Hoteles />  */}
      </Fragment>  
    );  
  }
}


export default App;
