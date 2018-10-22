var playlist = {
 'Steep Leans': 'Trap House'
};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({ artistName: [songTitle] }, playlist)
  return playlist;
}