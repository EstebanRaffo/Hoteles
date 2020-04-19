import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero";
import Filtros from "./components/Filtros";
import Hoteles from "./components/Hoteles";
import Moment from "moment";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      filters: {
        dateFrom: Moment(new Date()).format("YYYY-MM-DD"),
        dateTo: Moment()
          .add(1, "month")
          .format("YYYY-MM-DD"),
        country: "select",
        price: "select",
        rooms: "select"
      },
      hotels: [],
      filteredHotels: [],
      isAllLoaded: false
    };
  }

  render(){
    return(
      <Fragment>
         <Hero filters={this.state.filters}/>
         <Filtros />
         <Hoteles />
      </Fragment>  
    );  
  }
}


export default App;
