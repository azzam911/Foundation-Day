let myLinks = document.querySelector(".head .container ul");
document.querySelector(".head .container .links").onclick = function () {
    if (myLinks.classList.contains("show")) {
        myLinks.classList.remove("show");
    }else {
        myLinks.classList.add("show");
    }
}


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
if (video.paused) {
    video.play();
    btn.innerHTML = "ايقاف";
} else {
    video.pause();
    btn.innerHTML = "تشغيل";
}
}