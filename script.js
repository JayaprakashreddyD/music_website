const songs = [
    { title: "Enna Sona", artist: "Arijit Singh", file: "./songs/@A. R. Rahman - Enna Sona VideoOK JaanuArijit SinghShraddha KapoorAditya Roy.mp3", cover: "https://via.placeholder.com/150" },
    { title: "I Wanna Be Yours", artist: "Arcitic Monkeys", file: "./songs/Arctic Monkeys - I Wanna Be Yours.mp3", cover: "https://via.placeholder.com/150" },
    { title: "Night Changes", artist: "One Direction", file: "./songs/One Direction - Night Changes.mp3", cover: "https://via.placeholder.com/150" }
];

const playlist = document.getElementById("playlist");
const searchInput = document.getElementById("searchInput");
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const coverImage = document.getElementById("cover");

// Load Songs into Playlist
function loadSongs(songList) {
    playlist.innerHTML = ""; // Clear previous list
    songList.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.title;
        li.dataset.index = index;
        li.addEventListener("click", () => playSong(index));
        playlist.appendChild(li);
    });
}

// Play Selected Song
function playSong(index) {
    const song = songs[index];
    audioSource.src = song.file;
    audioPlayer.load();
    audioPlayer.play();
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    coverImage.src = song.cover;
}

// Search Filter
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );
    loadSongs(filteredSongs);
});

// Load Songs Initially
loadSongs(songs);
