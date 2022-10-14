

$('#bien').on('click', function() {
  $('#myModal').modal();
      $('document').ready(function() {
        const audio = new Audio("magic-mallet-6262.mp3" );
        audio.play();
    });
});

$('#mal').on('click', function() {
  $('#myModal-2').modal();
      $('document').ready(function() {
        const audio = new Audio("negative_beeps-6008.mp3" );
        audio.play();
        });
});

$('#mal2').on('click', function() {
  $('#myModal-2').modal();
      $('document').ready(function() {
        const audio = new Audio("negative_beeps-6008.mp3" );
        audio.play();
        });
});


var elem = document.getElementById("very-specific-design");
function openFullscreen() {
document.documentElement.requestFullscreen().catch((e) => {
         console.log(e);
      });
}