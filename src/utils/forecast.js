const request = require('postman-request')
// const geocode = require('./geocode')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=625a68189aa245f1313af3d0cc2ea116&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location!', undefined)
        }
        else {
            const curr = body.current
            callback(undefined, curr.weather_descriptions[0] + '! The current temperature is ' + curr.temperature + ' degrees but it feels like ' + curr.feelslike
             + " degrees.\nThe Humidity is " + curr.humidity + "%. Observation Time: " + curr.observation_time)
        }
    })

}

module.exports = forecast