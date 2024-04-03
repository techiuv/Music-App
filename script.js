// Function to get the element representing the day and update it
function getDay() {
    // Array of days
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Get the current day index
    const currentDay = new Date().getDay();
    // Get the day element
    const dayElement = document.getElementById('day');
    // Update the day element with the current day and 'Chill' text
    if (dayElement) {
        dayElement.textContent = days[currentDay] + ' Chill';
    }
}

// Call the function to set the day
getDay();

// Function to count songs and update the song count element
function countSong() {
    const songParent = document.getElementById('song-container');
    const songCount = document.getElementById('song-count');
    if (songParent && songCount) {
        songCount.textContent = '• ' + songParent.childElementCount + ' songs';
    }
}

// Call the function to count songs
countSong();

// Define song details
const songDetails = [
    {
        name: "Blue Eyes",
        artist: "Yo Yo Honey Singh", 
        downloadSrc: "Blue Eyes Yo Yo Honey Singh 320 Kbps.mp3", 
        audioSrc:"Blue Eyes Yo Yo Honey Singh 320 Kbps.mp3", 
        imgSrc:"Blue-Eyes.jpg"
    },
    {
        name: "Sapna Jahan",
        artist: "Sonu Nigam, Ajay Atul, Neeti Mohan", 
        downloadSrc: "Sapna Jahan.mp3", 
        audioSrc: "Sapna Jahan.mp3", 
        imgSrc:"Sapna-Jahan.jpg"
    },
    {
        name: "Zaalima",
        artist: "Arjit Singh, Harshjeet Kair",
        downloadSrc: "Zaalima.mp3", 
        audioSrc: "Zaalima.mp3", 
        imgSrc:"Raees.jpg"
    },
    {
        name: "Shiddat",
        artist: "Manan Bhardwaj", 
        downloadSrc: "Shiddat.mp3", 
        audioSrc: "Shiddat.mp3", 
        imgSrc:"Shiddat.jpg"
    }, 
    {
        name: "Phir aur kya Chahiye", 
        artist: "Arjit Singh", 
        downloadSrc: "Phir Aur Kya Chahiye.mp3", 
        audioSrc: "Phir Aur Kya Chahiye.mp3", 
        imgSrc:"phir aur kya chahiye.jpg"
    }, 
    {
        name: "Ve Haniya", 
        artist: "Danny", 
        downloadSrc: "Ve Haniya", 
        audioSrc: "Ve Haniya.mp3", 
        imgSrc:"ve haniya.jpg"
    }, 
    {
        name: "O Mahi", 
        artist: "Arjit Singh", 
        downloadSrc: "Phir Aur Kya Chahiye.mp3", 
        audioSrc: "O Mahi.mp3", 
        imgSrc:"O-mahi.jpg"
    }, 
    {
        name: "Kahani Suni", 
        artist: "Kafi khail", 
        downloadSrc: "Kahani Suno.mp3", 
        audioSrc: "Kahani Suno.mp3", 
        imgSrc:"Kahani-Suno.jpg"
    }, 
    {
        name: "Zihaal e Muskil", 
        artist: "Shreya Ghosal, Vishal Mishra", 
        downloadSrc: "Zihaal e Miskin.mp3", 
        audioSrc: "Zihaal e Miskin.mp3", 
        imgSrc:"Zihaal e Miskin.jpg"
    }, 
    {
        name: "Tere Hawale", 
        artist: "Arjit Singh,Shipla Rao", 
        downloadSrc: "Tere Hawalw.mp3", 
        audioSrc: "Tere Hawale.mp3", 
        imgSrc:"Tere-Hawaale.jpg"
    }
];

// Get all music details elements
const musicDtsElements = document.querySelectorAll('.music-dts');

// Loop through each music details element and update name, artist, image, and download link
musicDtsElements.forEach((musicDts, index) => {
    const songNameElement = musicDts.querySelector('.song-name');
    const artistNameElement = musicDts.querySelector('.artist-name');
    const downloadLink = musicDts.querySelector('.download a');
    const songImage = musicDts.querySelector('.img-thumbnail img');
    
    if (songDetails[index]) {
        // Update name, artist, image, and download link using songDetails array
        songNameElement.textContent = songDetails[index].name;
        artistNameElement.textContent = songDetails[index].artist;
        songImage.src = songDetails[index].imgSrc;
        if (downloadLink) {
            downloadLink.setAttribute('href', songDetails[index].downloadSrc);
            downloadLink.setAttribute('download', songDetails[index].downloadSrc);
        }
    }
});

// Like button event listener
const likes = document.querySelectorAll('.like');
likes.forEach(like => {
    like.addEventListener('click', () => {
        // Toggle like button color and save the state
        if (like.style.color === "rgb(217, 217, 217)") {
            like.innerHTML = '<ion-icon name="heart"></ion-icon>';
            like.style.color = "#10c25a";
        } else {
            like.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
            like.style.color = "#d9d9d9";
        }
        saveLike(like);
    });
});

// Function to save like state
function saveLike(likeBtn) {
    localStorage.setItem("likeBtn-" + likeBtn.dataset.id, likeBtn.style.color);
}

// Function to show like state
function showLike(likeBtn) {
    const likeColor = localStorage.getItem("likeBtn-" + likeBtn.dataset.id);
    if (likeColor) {
        likeBtn.style.color = likeColor;
    }
}

// Loop through each like button to show its saved state
likes.forEach(showLike);

// Initialize currentIndex as a global variable
let currentIndex = 0;

function playMusic(index) {
    // Pause the currently playing song if any
       pauseMusic(currentIndex);
    // Update currentIndex
    currentIndex = index;
    // Get the audio element for the current song
    const audio = document.querySelectorAll('.song')[currentIndex];
    // Play the audio
    audio.play();
}


// Function to pause music
function pauseMusic(index) {
    // Get the audio element for the specified index
    const audio = document.querySelectorAll('.song')[index];
    // Pause the audio if it's playing
    if (!audio.paused) {
        audio.pause();
    }
}

// Play/Pause button event listener
const playPauseBtn = document.getElementById('play-pause');
playPauseBtn.addEventListener('click', () => {
    // Toggle play and pause functionality
    if (playPauseBtn.innerHTML = '<ion-icon name="caret-forward"></ion-icon>') {
        playMusic(currentIndex);
        playPauseBtn.innerHTML = '<ion-icon name="pause"></ion-icon>';
    } else {
        pauseMusic(currentIndex);
        playPauseBtn.innerHTML = '<ion-icon name="caret-forward"></ion-icon>';
    }
});

// Function to play the next song
function nextSong() {
    // Pause the current song
    pauseMusic(currentIndex);
    // Increment currentIndex
    currentIndex++;
    // Loop back to the first song if currentIndex exceeds the songDetails length
    if (currentIndex >= songDetails.length) {
        currentIndex = 0;
    }
    // Play the next song
    playMusic(currentIndex);
}

// Function to play the previous song
function prevSong() {
    // Pause the current song
    pauseMusic(currentIndex);
    // Decrement currentIndex
    currentIndex--;
    // Go to the last song if currentIndex becomes negative
    if (currentIndex < 0) {
        currentIndex = songDetails.length - 1;
    }
    // Play the previous song
    playMusic(currentIndex);
}


const songs = document.querySelectorAll('.song');
const seekbar = document.getElementById('range');

function updateSeekbarValue() {
    setInterval(() => {
        songs.forEach(song => {
            seekbar.value = song.currentTime;
            seekbar.max = song.duration;
        });
    }, 500);
}

updateSeekbarValue();

const loader = document.querySelector('.loader');

window.addEventListener('load',() => {
    loader.style.display = 'none';
});