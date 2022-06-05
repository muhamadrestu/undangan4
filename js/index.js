var mySong = document.getElementById("mySong");
var icon = document.getElementById("myNav");

var icon2 = document.getElementById("myNav");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "/images/pause2.png";
  } else {
    mySong.pause();
    icon.src = "/images/play2.png";
  }
};
