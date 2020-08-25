// const request=require('request')
// const forecast=(latitude,longitude,callback)=>{
//     const url= 'http://api.weatherstack.com/current?access_key=d4b60696bee3660ecd51479b116d8de4/'+latitude+','+longitude 
//     request({url:url,json:true},(error,response)=>{
//         if(error){
//             callback('Unable to connect with service',undefined)

//         }else if(response.body.error){
//             callback('Unable to connect',undefined)
//         }else{
//             callback(undefined,response.body.current.weather_descriptions[0] +'. Its is ' + response.body.current.temperature + ' degrees out'+ '. There is a chance of ' + response.body.current.precip +'% rain.')
//         }
//     })
// }

// module.exports = forecast

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    // const url = 'http://api.weatherstack.com/current?access_key=d4b60696bee3660ecd51479b116d8de4&query='+latitude+','+longitude
       const url = 'http://api.weatherstack.com/current?access_key=d4b60696bee3660ecd51479b116d8de4&query='+longitude+','+latitude;
 
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            //console.log(body.current.data[0])
            callback(undefined,' It is currently ' + body.current.temperature + ' degress out.') 
        }
    })
}

module.exports = forecast