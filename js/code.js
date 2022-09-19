//up controls
const left = document.querySelector(".left-btn");
const menu = document.querySelector(".menu-btn");

//album
const title = document.querySelector(".player__song");
const artist = document.querySelector(".player__artist");

//bar
const player__level = document.querySelector(".player__level");
const start = document.querySelector(".start");
const end = document.querySelector(".end");

//down controls
const back = document.querySelector(".back-btn");
const play = document.querySelector(".play-btn");
const pause = document.querySelector(".pause-btn");
const next = document.querySelector(".next-btn");

//audio
const audio = document.querySelector("#audio");

//array
let musics = [
    {
        name: "",
        artist: "",
        url: ""
    }
];

//events
left.addEventListener("click", (e)=>{
    
});

menu.addEventListener("click", (e)=>{
    
});

back.addEventListener("click", (e)=>{

});

play.addEventListener("click", (e)=>{
    play.style.display = "none";
    pause.style.display = "block";
});

pause.addEventListener("click", (e)=>{
    pause.style.display = "none";
    play.style.display = "block";
});

next.addEventListener("click", (e)=>{

});