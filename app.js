var express = require('express');
var bodyParser = require('body-parser');
var locations = require('./models/locations.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// set query itemId to variable to use as index

// var requestedIndex = 0;

app.get("/:nextLocation?", function(req, res) {
	// console.log(req);
	// console.log(requestedIndex);
	// var currentLoc = locations[requestedIndex].location;
	// var nextLoc = locations.location.nextLocation;
	

	var nextLocation = req.params.nextLocation;
	console.log(nextLocation);
	
	// if no locationID is present in the url, render Seville (first page)
	for (var i=0; i<locations.length; i++){
		if (!nextLocation || i===0){
			res.render('layout', {
				location: locations[0].location,
				nextLocation: locations[1].locationURLFriendly
			});
		}
		else if (i+1 === locations.length){
			res.render('layout', {
				location: locations[i].location
			});
		}
		else if (locations[i].locationURLFriendly === nextLocation){
			res.render('layout', {
				location: locations[i].location,
				nextLocation: locations[i+1].locationURLFriendly
			});
		}
	}
	// res.render('layout', {
	// 	location: locations[requestedIndex].location,
	// 	nextLocation: locations[requestedIndex+1].dataID,
	// });
	// console.log(requestedIndex);
});

// app.post('/:requestedIndex?', function(req, res){
// 	res.render('layout', {
// 		location: locations[requestedIndex].location,
// 		nextLocation: requestedIndex+2
// 	});
// 	console.log(req.params);
// 	requestedIndex++;
// })


var server = app.listen(9365, function() {
	console.log('Express server listening on port ' + server.address().port);
});
