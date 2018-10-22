var playlist = {
 'Steep Leans': 'Trap House'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist = Object.assign({}, playlist, {'Kendrick Lamar': 'Alright'});
  return playlist;
}