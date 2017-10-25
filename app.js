// http is part of node core. We don't ahve to get it. it's built in, we just have to ask for it
var http = require("http");
// fs = file system is built in.See above.
// fs gives node access to the THIS computer's file system
var fs = require("fs")
// window.alert("Running!"); //ERROR!! There is no spoon.

function renderHomePage(){
	var theHTMLToGet = fs.readFileSync('homePage.html');
	return theHTMLToGet;
}

function renderScripts(){
	var jsToGet = fs.readFileSync('scripts.js');
	return jsToGet;
}

var server = http.createServer((req,res)=>{
	console.log(req.url); //will print off the requested url MINUS the host

	if(req.url === '/'){
		// user wants the home page
		var homePageHTML = renderHomePage()
		res.writeHead(200,{'content-type':'text/html'})
		res.end(homePageHTML);
	}else if(req.url === '/scripts.js'){
		var jsContents = renderScripts();
		res.writeHead(200,{'content-type':'text/javascript'})
		res.end(jsContents);
	}else{
		res.writeHead(418,{'content-type':'text/html'});
		res.end('<h1>Sorry this page does not exist.</h1>');
	}

	// res.writeHead(200,{'content-type': 'text/html'})
	// // res.write("<html>");
	// // res.write("<body>");
	// res.end("<h1>Sanity Check</h1>");
})

// Tell the server we created with http.createSerer to listen to port 8001.
// Whenever someone maeks a request via HTTP to this port on THIS computer,
// the function/callback will fire with the req and res objects
server.listen(8001);
console.log("Server is listening for HTTP traffic on port 8001...");