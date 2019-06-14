const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/3ca4d97668da62d29860ccde8ed12fd4/${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ` It is currently ${body.currently.temperature} degress out and there is a ${body.daily.data[0].precipProbability}% chance of rain. The high for today is ${body.daily.data[0].temperatureHigh} and the low is ${body.daily.data[0].temperatureLow}`)
        }
    })
}

module.exports = forecast