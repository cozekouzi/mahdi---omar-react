import './App.css';
import mostlyCloudy from './images/weather-icons/mostlycloudy.svg';
import clear from './images/weather-icons/clear.svg';
function App() {
  return (
  <>  
    <header className="header">
      <h2 className="london">london</h2>
      <button className="find-Weather-btn">FIND WEATHER</button>
    </header>
    <body className="App-body">
      <div className="main">
        <div className="daily-weather">
          <img src={mostlyCloudy} className="dailyCloud"/>
          <p className="white-weather">overcast clouds</p>
          <div className="daily-temp temp">
            <div><p><b>Tempreture</b></p></div>
            <div><p> 10°C to 11°C</p></div>
          </div>
          <div className="daily-temp hum" >
            <div><b>Humidty</b></div>
            <div> 78%</div>
            <div><b>Pressure</b></div>
            <div>1008.48</div>
          </div>
        </div>
      </div>

      <div className="weekly-weather">
        <div className="mon">
          <p>03:00</p>
          <img src={mostlyCloudy} className="weekCloud"/>
          <p>8°C </p>
        </div>
        <div className="tues">
          <p>06:00</p>
          <img src={mostlyCloudy} className="weekCloud"/>
          <p>9°C </p>
        </div>
        <div className="wed">
          <p>09:00</p>
          <img src={clear} className="weekCloud"/>
          <p>14°C </p>
        </div>
        <div className="thurs">
          <p>12:00</p>
          <img src={clear} className="weekCloud"/>
          <p>17°C </p>
        </div>
        <div className="fri">
          <p>15:00</p>
          <img src={clear} className="weekCloud"/>
          <p>18°C </p>
        </div>
        <div className="sat">
          <p>18:00</p>
          <img src={clear} className="weekCloud"/>
          <p>16°C </p>
        </div>
        <div className="son">
          <p>21:00</p>
          <img src={mostlyCloudy} className="weekCloud"/>
          <p>13°C </p>
        </div>

      </div>
    </body>
  </>
  );
}

export default App;
