// retrieve all the elements from the DOM
const $hours = document.querySelector('#hours');
const $minutes = document.querySelector('#minutes');
const $seconds = document.querySelector('#seconds');
const $currentYear = document.querySelector('#currentYear');
const $sound = document.querySelector('#soundIcon>i');
const $video = document.querySelector('video');

// update the time every second
setInterval(() => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    hours = hours > 12 ? hours - 12 : hours;
    hours = hours.toString().padStart(2, '0');

    $hours.textContent = hours;
    $minutes.textContent = minutes;
    $seconds.textContent = seconds;
}, 1000);

// get the current year
$currentYear.textContent = new Date().getFullYear();

// toggle the sound icon
$sound.addEventListener('click', () => {
    $video.muted = !$video.muted;
    if ($video.muted) {
        $sound.classList.remove('fa-volume-xmark');
        $sound.classList.add('fa-volume-high');
    } else {
        $sound.classList.remove('fa-volume-high');
        $sound.classList.add('fa-volume-xmark');
    }
});