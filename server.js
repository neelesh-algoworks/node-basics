// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources

app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
// configure instagram app with your access token

ig.use({
    access_token: '2352872400.1677ed0.437b51a3a966410386cab4bb632f1074'
});
// we'll get to this soon

// SET THE ROUTES
// ===================================================
// home page route - our profile's images
app.get('/', function (req, res) {
    
    // use the instagram package to get our profile's media
    // render the home page and pass in our profile's images
    ig.user_self_media_recent(function (err, medias, pagination, remaining, limit) {
        // render the home page and pass in the popular images
        res.render('pages/index', { grams: medias });
    });
});


// START THE SERVER
// ==================================================
app.listen(8000);
console.log('App started! Look at http://localhost:8000');