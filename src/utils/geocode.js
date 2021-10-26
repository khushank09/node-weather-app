const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2h1c2hhbmswOSIsImEiOiJja3Q0bHJwdzMxNWVrMm9wZ2h3c2lzbXoxIn0.DHgQUnmwL_7Cmq7r6_n5LQ&limit=1'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        }
        else {
            const curr = body.features[0]
            callback(undefined, {
                latitude: curr.center[1],
                longitude: curr.center[0],
                location: curr.place_name
            })
        }
    })
}

module.exports = geocode