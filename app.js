var express = require('express');
var bodyParser = require('body-parser');
var locations = require('./models/locations.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// set query itemId to variable to use as index

var requestedIndex = 0;

app.get("/:requestedIndex?", function(req, res) {
	// console.log(req);
	// console.log(requestedIndex);
	// var currentLoc = locations[requestedIndex].location;
	// var nextLoc = locations.location.nextLocation;
	res.render('layout', {
		location: locations[requestedIndex].location,
		nextLocation: locations[requestedIndex+1].dataId,
	});
	console.log(requestedIndex);
});

app.post('/:requestedIndex?', function(req, res){
	res.render('layout', {
		location: locations[requestedIndex].location,
		nextLocation: requestedIndex+2
	});
	console.log(req.params);
	requestedIndex++;
})


var server = app.listen(9365, function() {
	console.log('Express server listening on port ' + server.address().port);
});
