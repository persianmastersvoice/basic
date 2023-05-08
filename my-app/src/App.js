import React, { useState, useEffect } from 'react';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/persianmastersvoice/data/e1c6fd8a66c0e99a6270b50d91776c634549b21b/songs/songs.json')
      .then(response => response.json())
      .then(data => setSongs(data.songs))
      .catch(error => console.error(error));
  }, []);

  const audioFiles = [
    {
      title: 'Audio 1',
      file: 'https://raw.githubusercontent.com/persianmastersvoice/data/main/audio/audio-1.mp3'
    },
    {
      title: 'Audio 2',
      file: 'https://raw.githubusercontent.com/persianmastersvoice/data/main/audio/audio-2.mp3'
    },
    {
      title: 'Audio 3',
      file: 'https://raw.githubusercontent.com/persianmastersvoice/data/main/audio/audio-3.mp3'
    },
    {
      title: 'Audio 4',
      file: 'https://raw.githubusercontent.com/persianmastersvoice/data/main/audio/audio-4.mp3'
    },
    {
      title: 'Audio 5',
      file: 'https://raw.githubusercontent.com/persianmastersvoice/data/main/audio/audio-5.mp3'
    }
  ];

  const handlePlay = () => {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.play();
  };

  const handlePause = () => {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.pause();
  };

  const handleStop = () => {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  };

  const handlePrevious = () => {
    setCurrentSongIndex(currentSongIndex === 0 ? audioFiles.length - 1 : currentSongIndex - 1);
  };

  const handleNext = () => {
    setCurrentSongIndex(currentSongIndex === audioFiles.length - 1 ? 0 : currentSongIndex + 1);
  };

  return (
    <div>
      <h1>List of Songs</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(song => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Audio Player</h2>
      <audio id="audio-player" src={audioFiles[currentSongIndex].file} controls></audio>
      <p>
        <strong>Now playing: </strong>{audioFiles[currentSongIndex].title}
      </p>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;