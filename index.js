document.querySelector(".enter").addEventListener("click", takeUsername)

function takeUsername(){
  var name = document.querySelector(".input-data").value;

  console.log(name)
  localStorage.setItem("username", name);

  window.location.href = "./level.html"
}

document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("video-background");

  // Set the playback speed
  video.playbackRate = 0.5; // Adjust the value (e.g., 0.5 for half speed, 2 for double speed)
});


function instructbtn(){
  window.location.href = "./instructions.html"
}



