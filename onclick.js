function handleClick() {
    var div = document.getElementById("mininav");
    div.classList.add("activenow");
    var boxElement = document.querySelector('.mininav');
    var searchinput = document.getElementById('searchInput');
    var searcbutton = document.getElementById('searchbutton');
        if (!boxElement.classList.contains('transformed'))  {
        setTimeout(function() {
        boxElement.classList.add('transformed');
    }, 700);
        setTimeout(function() {
            searchinput.classList.add('show');
        },800)
   }   else {
    setTimeout(function() {
        boxElement.classList.remove('transformed');
    }, 100);
    setTimeout(function(){
        boxElement.classList.remove('activenow');
    }, 900);
    setTimeout(function(){
        searchinput.classList.remove('show');
   },50)
   }
}
function clickAgain() {
    var div = document.getElementById("transition");
    div.classList.add("activetransition");
    setTimeout(function(){
        window.location.href = "introduction.html"
    }, 600)
}
function clickAgain1() {
    var div = document.getElementById("transition");
    div.classList.add("activetransition");
    setTimeout(function(){
        window.location.href = "index.html"
    }, 600)
}
function clickAgain2() {
    var div = document.getElementById("transition");
    div.classList.add("activetransition");
    setTimeout(function(){
        window.location.href = "art.html"
    }, 600)
}
function andrewyeth1() {
    var div = document.getElementById("transition");
    div.classList.add("activetransition");
    setTimeout(function(){
        window.location.href = "andrewyelth1.html"
    }, 600)
}
function contactus() {
    var div = document.getElementById("transition");
    div.classList.add("activetransition");
    setTimeout(function(){
        window.location.href = "contactus.html"
    }, 600)
}
function aboutus() {
    var div = document.getElementById("transition");
    div.classList.add("activetransition");
    setTimeout(function(){
        window.location.href = "aboutus.html"
    }, 600)
}
function music() {
    var div = document.getElementById("transition");
    div.classList.add("activetransition");
    setTimeout(function(){
        window.location.href = "musics.html"
    }, 600)
}
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    audio.volume = 0.3; // Set the volume to 0.5 (range: 0.0 to 1.0)
  });

function dieforyou(){
    var div = document.getElementById("transition");
    div.classList.add("activetransition");
    setTimeout(function() {
        window.location.href = "dieforyou.html"
    }, 600);
};
function savethis(element) {
    event.preventDefault();
    var linkHref = element.getAttribute("data-href");
    console.log(linkHref);
    var div = document.getElementById("transition");
    div.classList.add("activetransition");
    setTimeout(function() {
      window.location.href = linkHref;
    }, 600);
  }
  document.addEventListener("DOMContentLoaded", function() {
    var div = document.getElementById("transition");
  
    setTimeout(function() {
      div.classList.remove("activetransition");
    }, 500);
  });  