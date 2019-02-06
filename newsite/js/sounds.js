    // Play sound after pageload for Onepage
    // and for medium and large screens only
    function startSong(){
        var $iW = $(window).innerWidth();
        if($iW >= 992){
          $('.playsound').hide();
          

          if ( $('body').hasClass('sounds-enable') ){
              if ( $('body').hasClass('bg-sound') ){
                setTimeout(function() {
                    //generate a random number between 1 and 2
                    var $randNr = Math.floor((Math.random() * 2) + 1); 

                  var audioElement3 = document.createElement('audio');
                  audioElement3.setAttribute('src', 'sounds/_music0'+ $randNr +'.mp3');
                  audioElement3.setAttribute('autoplay', 'autoplay');
                  audioElement3.volume=.3;
                  //play/pause icon
                  $('.stopsound').click(function() {
                      audioElement3.pause();
                      $('.stopsound').hide();
                      $('.playsound').show();
                      var imgElement = document.createElement('img');
                      imgElement.setAttribute('src', 'images/sound-off.gif');
                  });
                  $('.playsound').click(function() {
                      audioElement3.play();
                      $('.stopsound').show();
                      $('.playsound').hide();
                      var imgElement = document.createElement('img');
                      imgElement.setAttribute('src', 'images/sound-on.gif');
                  });
                }, 700);
              }
          }
        }
    }


if ( $('body').hasClass('sounds-enable') ){
    function sound(){
      //Triger sounds
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'sounds/audio02.mp3');
      audioElement.play();
      audioElement.volume=.5;
    }
    function sound3(){
      //Triger sounds
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'sounds/transition03.mp3');
      audioElement.play();
    }
    $('.sound-wall').click(function() {
        //Triger sounds
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/audio02.mp3');
        audioElement.play();
    });
    $('.soundClick').mouseover(function() {
        //Triger sounds on menu click
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/button11.mp3');
        audioElement.play();
    });
    $('.sound2').mouseover(function() {
        //Triger sounds on menu click
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/button12.mp3');
        audioElement.play();
    });
    $('.sound3').mouseover(function() {
        //Triger sounds on menu click
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/transition02.mp3');
        audioElement.play();
    });

    $('.icon-sound').click(function() {
        audioElement3.pause();
    });

    $(".effecttrigger").click(function() {
        //Triger Dropp closed sound
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/audio02b.mp3');
        audioElement.play();
    });

    $(".hide-show-button").click(function() {
        //Triger sounds on menu click
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/audio02.mp3');
        audioElement.play();
    });

    $(".closemenu").click(function() {
        //Triger sounds on menu click
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/audio02.mp3');
        audioElement.play();
    });

    $(".closemenu2").click(function() {
        //Triger sounds on menu click
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/audio02.mp3');
        audioElement.play();
    });


}