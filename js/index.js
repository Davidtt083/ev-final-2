$('input[id="r1"]').on('change', function(e){
    if(e.target.checked){
      $('#myModal').modal();
      $('document').ready(function() {
        const audio = new Audio("magic-mallet-6262.mp3" );
        audio.play();
        });
    }
 });

 $('input[id="r2"]').on('change', function(e){
    if(e.target.checked){
      $('#myModal-2').modal();
      $('document').ready(function() {
        const audio = new Audio("negative_beeps-6008.mp3" );
        audio.play();
        });
    }
 });

 
      function myFunction() {
        window.location.href="http://programminghead.com";
      }
    
      var popupsound = document.getElementById("notifypop");

function autoNotify() {
   popupsound.play(); //play the audio file
   popupsound.play(); //play the audio file
}