function resize() {
  var w = window.innerWidth,
    h = window.innerHeight;

  $('#first-container').width(w);
  $('#first-container').height(h);
  $('#video').height(h);
  $('.shadow').height(h - 88);

  var moh = $('#main-title').outerHeight(true);
  var mow = $('#main-title').outerWidth(true);
  log(w + '/' + h);
  log(moh);
  log(mow);
  var top = h / 2 - (moh);
  var left = w / 2 - (mow / 2);
  $('#main-title').css("top", top + 'px');
  $('#main-title').css("left", left + 'px');
}

function log(str) {
  $('#helper').append('<p>' + str + '</p>');
}

$(document).ready(function () {
  resize();

  window.onresize = function (e) {
    resize();
  };
});