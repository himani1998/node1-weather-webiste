// const request= require('request')
// const geocode = (address,callback) => {
//     const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
//      request({ url , json:true}, (error,{body})=>{
//       if(error){
//          callback('Unable to connect to location services!',undefined) 
//       } else if(body.features.length === 0){
//           callback('Unable to find location. Try another search',undefined)
//       }
//       else
//       {
//           callback(undefined,{
//               latitude: body.features[0].center[0],
//               longitude: body.features[0].center[1],
//               location: body.features[0].place_name
//           })
//       }

//   })

//  }
//  module.exports =geocode


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })


const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaGltYW5pMTk5OCIsImEiOiJja2NjNWJ4bGkwMWUyMnFvZ3g0bDZmdGRwIn0.1NW5lpo81m8YQTxItdQDfA'

    request({ url, json: true }, (error,{body}) => {
        
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
           
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode