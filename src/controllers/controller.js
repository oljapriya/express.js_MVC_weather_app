const axios = require ("axios");

const API_KEY = "737dceaa64e697e2cf49ce7a54cedc5b";

const Weather = require("../model/Weather")
exports.renderHomePage = (req, res) => {
  res.render("index")
}

exports.getWeather = (req, res) => {
  const city = req.body.city
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`

  const weather = new Weather(req.body.city)
  weather.validateUserInput()

  if (weather.errors.length){
    res.render("index", {
      error: weather.errors.toString()
    })
  } else {
    axios.get(url).then((response) => {
      const { temp: temperature } = response.data.main
      const { name: location } = response.data
      res.render("index", {
        weather: `It is currently ${temperature} °F in ${location}`
      })
    }).catch((error) => {
      console.log(error)
    })
  } 
} 

exports.renderAboutPage = (req, res) => {
  res.render("About")
}