// http is part of node core. We don't ahve to get it. it's built in, we just have to ask for it
var http = require("http");
var apikey = 'e312dbeb8840e51f92334498a261ca1d';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
// the request module is NOT part of core. We have it because we npm installed it
// node, by default, will look in the node_modules folder for it
// if it's not there, you have to specify where it is.
// if you dont have it... undefined.
var request = require('request');

var weatherAsData = "";


request.get(weatherUrl,(error, response, weatherData)=>{
	console.log(JSON.parse(weatherData))
})

// http module has a get method.
// it takes 2 args:
// 1. Where
// 2. COde to run when back (with the data)
// var request = http.get(weatherUrl,(theResponse)=>{
// 	// console.log(theResponse)
// 	console.log(theResponse.statusCode);
// 	theResponse.on('data',(chunkOfData)=>{
// 		// console.log(chunkOfData);
// 		weatherAsData += chunkOfData;
// 	});
// 	theResponse.on('end',()=>{
// 		console.log(weatherAsData);
// 	});
// });



// $('#thing').click(()=>{

// })

// $('#thing').on('click',(()=>{
	
// }))