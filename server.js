// grab packages
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

// configure app
app.use(express.static(__dirname + '/public'));

// set view engine to ejs
app.set('view engine', 'ejs');

ig.use({
	access_token: 'access-token-here'
});

// set routes
// home page - profile images
app.get('/', function(req, res) {

	// use the instagram package to get popular media
	ig.user_self_media_recent(function(err, medias, pagination, remaining, limit){
	
		// render the home page and pass in the popular images
		res.render('pages/index', { grams: medias });
	});	
});

// start the server on port 8080
app.listen(8080);

// send a message
console.log('App started on localhost:8080!');

