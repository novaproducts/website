document.addEventListener('DOMContentLoaded', function() {
  var playBtn = document.getElementById('playBtn');
  var audio = document.getElementById('myAudio');

  if (playBtn && audio) {
    playBtn.onclick = function() {
      if (audio.paused) {
        audio.play().catch(function(error) {
          console.log('Error playing audio: ' + error);
        });
      } else {
        audio.pause();
      }
    };
  } else {
    console.error('Nie znaleziono elementu playBtn lub myAudio.');
  }
});
