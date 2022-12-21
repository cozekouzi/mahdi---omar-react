import React, { Component } from "react";
import Search from "./components/Search";
import Fetch from "./Fetchdata.js"
import "./App.css";
import { useState } from "react";


const api = {
  key: "af024a44befc6813ea9f5c835ba6e2f2",
  base: "https://api.openweathermap.org/data/2.5/",
};


function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "omar and mahdi"
      };
    }
  
    handleInputChange = value => {
      this.setState({ name: value });
    };
  
    render() {
      return (
        <div className="app">
          <div className="app__header">
            <Search handleInput={this.handleInputChange} />
          </div>
          <div className="app__main">
            <Fetch/>
          </div>
        </div>
      );
    }
  }
  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}




export default App;


// import React, { Component } from "react";
// import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";
// import storm from "./img/weather-icons/storm.svg"
// import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
// import clear from "./img/weather-icons/clear.svg"
// import "./App.css";
// const api ={
//   key: 'af024a44befc6813ea9f5c835ba6e2f2',
//   base:'https://api.openweathermap.org/data/2.5',
// }



// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Mahdi"
//     };
//   }

//   handleInputChange = value => {
//     this.setState({ name: value });
//   };

//   render() {
//     return (
//       <div className="app">
//         {/* <SayHi />
//         <SayHello color="black" name={this.state.name} />
//         <Search handleInput={this.handleInputChange} /> */}
//         <div className="nav">
//           <div classname="nav2">
//           <input type="text" placeholder="Name of city" ></input>
//           <button type="submit">Find the weather</button>
//           </div>
//        </div>
//        <div className="part2">
//          < img src={storm} alt="storm" width="200" height="180"/>
//          <h3>Rain</h3>
//          <h2>Temperature 10&#176;C to 11&#176;C</h2>
//          <h4>Humidity&nbsp; &nbsp; 78% &nbsp; &nbsp;  pressure  &nbsp; &nbsp;1008.48</h4>
//           </div>
//           <div className="part3">
//          <div >
//            <p>03:00</p>
//            <img src={mostlycloudy} alt="clouds" width="100" height="70"></img>
//            <p>8&#176;C</p>
//          </div>
//          <div >
//            <p>06:00</p>
//            <img src={mostlycloudy} alt="clouds" width="100" height="70"></img>
//            <p>9&#176;C</p>
//          </div>
//          <div >
//            <p>09:00</p>
//            <img src={clear} alt="clear" width="100" height="70"></img>
//            <p>14&#176;C</p>
//          </div>
//          <div >
//            <p>12:00</p>
//            <img src={clear} alt="clear" width="100" height="70"></img>
//            <p>17&#176;C</p>
//          </div>
//          <div >
//            <p>15:00</p>
//            <img src={clear} alt="clear" width="100" height="70"></img>
//            <p>18&#176;C</p>
//          </div>
//          <div >
//            <p>18:00</p>
//            <img src={clear} alt="clear" width="100" height="70"></img>
//            <p>16&#176;C</p>
//          </div>
//          <div >
//            <p>21:00</p>
//            <img src={mostlycloudy} alt="mostlycloudy" width="100" height="70"></img>
//            <p>13&#176;C</p>
//          </div>
//          </div>
//       </div>
//     );
//   }
// }
// export default App;

// // import "./App.css";
// // import { useState } from "react";

// // const api = {
// //   key: "af024a44befc6813ea9f5c835ba6e2f2",
// //   base: "https://api.openweathermap.org/data/2.5/",
// // };

// // function App() {
// //   const [search, setSearch] = useState("");
// //   const [weather, setWeather] = useState({});

// //   /*
// //     Search button is pressed. Make a fetch call to the Open Weather Map API.
// //   */
// //   const searchPressed = () => {
// //     fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
// //       .then((res) => res.json())
// //       .then((result) => {
// //         setWeather(result);
// //       });
// //   };

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         {/* HEADER  */}
// //         <h1>Weather App</h1>

// //         {/* Search Box - Input + Button  */}
// //         <div>
// //           <input
// //             type="text"
// //             placeholder="Enter city/town..."
// //             onChange={(e) => setSearch(e.target.value)}
// //           />
// //           <button onClick={searchPressed}>Search</button>
// //         </div>

// //         {/* If weather is not undefined display results from API */}
// //         {typeof weather.main !== "undefined" ? (
// //           <div>
// //             {/* Location  */}
// //             <p>{weather.name}</p>

// //             {/* Temperature Celsius  */}
// //             <p>{weather.main.temp}°C</p>

// //             {/* Condition (Sunny ) */}
// //             <p>{weather.weather[0].main}</p>
// //             <p>({weather.weather[0].description})</p>
// //           </div>
// //         ) : (
// //           ""
// //         )}
// //       </header>
// //     </div>
// //   );
// // }

