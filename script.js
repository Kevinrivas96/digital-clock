// Retrieve all the elements from the DOM
const $hours = document.querySelector('#hours');
const $minutes = document.querySelector('#minutes');
const $seconds = document.querySelector('#seconds');
const $currentYear = document.querySelector('#currentYear');
const $sound = document.querySelector('#soundIcon > i');
const $video = document.querySelector('video');

// Update the time every second
setInterval(updateTime, 1000);

// Update the time
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours() % 12 || 12).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    $hours.textContent = hours;
    $minutes.textContent = minutes;
    $seconds.textContent = seconds;
}

// Get the current year
$currentYear.textContent = new Date().getFullYear();

// Toggle the sound icon
$sound.addEventListener('click', () => {
    $video.muted = !$video.muted;
    $sound.classList.toggle('fa-volume-xmark', $video.muted);
    $sound.classList.toggle('fa-volume-high', !$video.muted);
});

// update the time on page load
updateTime();
