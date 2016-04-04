var Twit = require('twit');

var T = new Twit({
  consumer_key: 'mwCsnvLt4ZYYKywpHP6gVIxxX',
  consumer_secret: 'XpcAoafFdwFt7oC3jdGzEmcb4mzAueOHUL9ftAlU0qnoWAlYZb',
  access_token: '1901732780-sBQO9RoWaNpeWB6uJ2pRAQxbyaNVVpCpU6FBLLm',
  access_token_secret: 'EWubnG6g6oSZKvGYtbrG6ChZP6jmtBHoeYY0nGHV5jCeo'
});

T.post('statuses/update', { status: "I'm posting a tweet!" }, function(err, data, response) {
  if(err) {
    console.log("There was a problem tweeting the message.", err);
  }
});
