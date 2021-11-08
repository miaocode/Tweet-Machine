$(document).ready(function(){
  var $app = $('#app');
  $app.html('');

  var $title = $('<h1>Twiddler</h1>')
  var $updateFeed = $('<button id="update-feed">Update Feed</button>');
  var $feed = $('<div id="feed"></div>')

  var randerFeed = function(user) {
    $feed.html('');
    if(user === undefined) {
      var index = streams.home.length - 1;
      while(index >= 0) {
        var tweet = streams.home[index];
        var $tweet = $('<div class="tweet"></div>');
        var $profilePhoto = $('<img class="profile-photo">');
        var $username = $('<div class="username"></div>');
        var $message = $('<div class="message"></div>');
        var $timeStamp = $('<div class="timestamp"</div>');
        var $icon = $('<div class="icon"</div>');
        var $comment = $('<i class="far fa-comments"></i>');
        var $retweet = $('<i class="fas fa-retweet"></i>');
        var $like = $('<i class="far fa-heart"></i>');
        var $share = $('<i class="fas fa-share-alt"></i>');

        $profilePhoto.attr('src', 'assets/img/' + tweet.user + '.png');
        $username.text('@' + tweet.user);
        $message.text(tweet.message);
        $timeStamp.text(tweet.created_at);

        $icon.append($comment, $retweet, $like, $share)
        $tweet.append($profilePhoto, $username, $message, $timeStamp, $icon)
        $feed.append($tweet);
        index -= 1;
      }
    }else{
      var index = streams.users[user].length - 1;
      while(index >= 0) {
        var tweet = streams.users[user][index];
        var $tweet = $('<div class="tweet"></div>');
        var $profilePhoto = $('<img class="profile-photo">');
        var $username = $('<div class="username"></div>');
        var $message = $('<div class="message"></div>');
        var $timeStamp = $('<div class="timestamp"</div>');
        var $icon = $('<div class="icon"</div>');
        var $comment = $('<i class="far fa-comments"></i>');
        var $retweet = $('<i class="fas fa-retweet"></i>');
        var $like = $('<i class="far fa-heart"></i>');
        var $share = $('<i class="fas fa-share-alt"></i>');

        $profilePhoto.attr('src', 'assets/img/' + tweet.user + '.png');
        $username.text('@' + user);
        $message.text(tweet.message);
        $timeStamp.text(tweet.created_at);

        $icon.append($comment, $retweet, $like, $share)
        $tweet.append($profilePhoto, $username, $message, $timeStamp, $icon)
        $feed.append($tweet);
        index -= 1;
      }
    }

  }
  $app.append($title, $updateFeed, $feed);

  randerFeed();

  $('#update-feed').click(function() {

    randerFeed()
  });

  $('#feed').on('click', '.username', function(event) {

    var username = event.currentTarget.innerText.slice(1);
    randerFeed(username);
    $('#update-feed').text('Back');
  });

  $('#update-feed').click(function() {
   if ($(this).text() == 'Back') {
    $(this).text('Update Feed')
   }
  });

});