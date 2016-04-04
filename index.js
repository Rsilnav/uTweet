var request = require("request");
var Twit = require('twit');

var T = new Twit({
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: ''
});

var url = "http://uhunt.felix-halim.net/api/p";

request({
    url: url,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var rnd = Math.floor(Math.random() * body.length);
        var title = body[rnd][2];
        var dacu = body[rnd][3];
        var number = body[rnd][1];
        var level = 10 - Math.floor(Math.min(10, Math.log(dacu? dacu : 1)));
        var str = "Nuestro reto propuesto para hoy es: " + number + " " + title + " (Dificultad " + level + ")";
        console.log();

        T.post('statuses/update', { status: str }, function(err, data, response) {
          if(err) {
            console.log("There was a problem tweeting the message.", err);
          }
        });
    }
});
