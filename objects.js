var playlist = {
 'Steep Leans': 'Trap House'
};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {'Kendrick Lamar': 'Alright'});
  return playlist;
}