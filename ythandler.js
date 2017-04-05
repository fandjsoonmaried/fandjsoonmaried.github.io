// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    height: '100%',
    width: '100%',
    videoId: 'txZaYAimKYg',
    playerVars: {
      //'autoplay': 1,
      'controls': 0,
      //'disablekb': 1,
      //'fs': 1,
      'modestbranding': 1,
      'showinfo': 0,
      'start': 13,
      //'end': 15,
      'loop': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  function onPlayerReady(event) {
    player.playVideo();
    event.target.mute();
    event.target.setLoop(true);
  }
  function onPlayerStateChange(event) {
    onPlayerReady(event);
  }
}
