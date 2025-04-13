document.getElementById("profileToggle").addEventListener("click", function () {
    var profile = document.getElementById("userProfile");
    profile.classList.toggle("active");
});
document.getElementById("darkModeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.querySelector(".sidebar").classList.toggle("dark-mode");
        document.querySelector(".main-content").classList.toggle("dark-mode");
    });


    document.getElementById("Search").addEventListener("input", function () {
let searchQuery = this.value.toLowerCase();
let courses = document.querySelectorAll(".course");

courses.forEach(course => {
let courseTitle = course.querySelector("p").textContent.toLowerCase();
if (courseTitle.includes(searchQuery)) {
    course.style.display = "block";
} else {
    course.style.display = "none";  
}
});
});









document.getElementById("profileToggle").addEventListener("click", function () {
    var profile = document.getElementById("userProfile");
    profile.classList.toggle("active");
});
document.getElementById("darkModeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.querySelector(".sidebar").classList.toggle("dark-mode");
        document.querySelector(".main-content").classList.toggle("dark-mode");
    });


    document.getElementById("Search").addEventListener("input", function () {
let searchQuery = this.value.toLowerCase();
let courses = document.querySelectorAll(".course");

courses.forEach(course => {
let courseTitle = course.querySelector("p").textContent.toLowerCase();
if (courseTitle.includes(searchQuery)) {
    course.style.display = "block";
} else {
    course.style.display = "none";  
}
});
});



const videos = [
"https://www.youtube.com/embed/LGQuIIv2RVA",
"https://www.youtube.com/embed/V8UAEoOvqFg"
];
let currentVideo = 0;

function nextVideo() {
currentVideo = (currentVideo + 1) % videos.length;
document.getElementById("videoPlayer").src = videos[currentVideo];
}

function prevVideo() {
currentVideo = (currentVideo - 1 + videos.length) % videos.length;
document.getElementById("videoPlayer").src = videos[currentVideo];
}

document.getElementById("videoCount").innerText = `${videos.length} videos`;