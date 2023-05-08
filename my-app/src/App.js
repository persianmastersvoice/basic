import React, { useState, useEffect } from 'react';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/persianmastersvoice/data/e1c6fd8a66c0e99a6270b50d91776c634549b21b/songs/songs.json')
      .then(response => response.json())
      .then(data => setSongs(data.songs))
      .catch(error => console.error(error));
  }, []);

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
    </div>
  );
}

export default App;
