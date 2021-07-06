import './App.css';
import React from 'react'
import axios from 'axios'
import Weather from './Weather';


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cityname: "",
      lon: "",
      lat: "",
      showMap:false,
      showWeather:false,
      days:null

    }
  }

  getCity = async (e) => {
    e.preventDefault();

  


    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${e.target.city.value}&format=json`;
    let resData = await axios.get(url);
    console.log(resData.data[0])

    let url2 = `https://dk-city-explorer.herokuapp.com/weather/?city_name=${e.target.city.value}&format=json`;
    let resData2 = await axios.get(url2);
    console.log(resData2);

    this.setState({
      cityname: resData.data[0].display_name
      , lon: resData.data[0].lon,
      lat: resData.data[0].lat,
      showMap:true,
      showWeather:true,
      days: resData2.data
      
    })

  }




  render() {
    return (
      <>
        <h1>City Explore</h1>
        <form onSubmit={this.getCity}>
          {/* lat :{this.state.lat}
          lon:{this.state.lon}</p> */}

          <input type='text' placeholder='cityname' name='city' />
          <input type='submit' value='explore' />

        </form>
        {this.state.showMap &&
 <p>Cityname:={this.state.cityname}{this.state.lon},{this.state.lat}</p>}

{this.state.showMap &&
        <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=pk.f43e224bdcdc2ff03a90503f072090c0&center=${this.state.lat},${this.state.lon}&zoom=15`} />}

         {this.state.showWeather && <Weather days={this.state.days} /> }
      </>

    )
  }

}

export default App;
