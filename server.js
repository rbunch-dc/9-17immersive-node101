// Node is not JS, but reads JS.
// You can use it like "$ python NAMEOFFILE" to run some JS, because node reads JS.
// We still have accss to all the native elements: 
// var atlTeams = [
// 	'Braves',
// 	'Falcons',
// 	'United',
// 	'Hakws'
// ]
// console.log(atlTeams);

// var atl = {
// 	bball: "Hawks",
// 	football: "Falcons",
// 	soccar: "United",
// 	baseball: "Braves"
// }

// console.log(atl);
// console.log(document) //ERROR
// console.log(window); //ERROR

// Just like Python, there are some modules BUILT IN to node. 
// In order to access them, you use require.
var http = require('http');
// console.log(http);
// createServer is a method of the http object.
// It takes 1 argument, the function to run when someone connects via HTTP
var server = http.createServer((req, res)=>{
	console.log(req);

	// str = "Hi" + {name: "Rob" } = WAT

	// console.log(req);
	// console.log(req.rawHeaders[0]);
	// for(let i = 0; i<req.rawHeaders.length; i++){
	// 	console.log(req.rawHeaders[i]);
	// }
	// res = response = say SOMETHING back
	// writeHead sets the HTTP headers, 2 args
	// 1. status code
	// 2. mime type
	res.writeHead(200,{'content-type':'text/html'});
	// res.writeHead(200,{'content-type':'text/text'});
	res.write("<script>alert('hello')</script><h1>Hello, intrepid traveler. This is actually YOUR node server.Hope you are having a good day</h1>");
	res.end();
});

// HTTP = 80
// add, 2 0s
// 8080, double 80
// you MUST use a port higher than 1024 
// because everything below belongs to root
console.log(`server is listening for connections on port 8000.`);
server.listen(8000)


// function someoneConnected(car, civilWar){

// }
