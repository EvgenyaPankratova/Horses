 const http = require('http');

 const PORT = 3000;

const server = http.createServer((req, res) => {
	console.log('Server request');
  	console.log('Just for test');

	  res.setHeader('Content-Type', 'application/json');
 
	const data = JSON.stringify([
		{name: 'Tommy', age: 10},
		{name: 'Arthur', age: 11}
	])

	res.end(data);
});

 server.listen(PORT, 'localhost', (error) =>{

 	error ? console.log(error) : console.log(`listening port ${PORT}`);

 });

