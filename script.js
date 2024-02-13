var arr=[
    {name:"Ram Siya Ram",url:"./audio/Ram Siya Ram.mp3",img:"./image/Screenshot 2024-02-13 041358.jpg"},
    {name:"Ram Ki Diwani",url:"./audio/Ram Ki Diwani.mp3",img:"./image/Screenshot 2024-02-13 041421.jpg"},
    {name:"Ram Ki Diwani2",url:"./audio/Ram Ki Diwani2.mp3",img:"./image/Screenshot 2024-02-13 041444.jpg"},
    // {name:"Ram Aayenge",url:"./audio/Raam Ayenge.mp3",img:"./image/Screenshot 2024-02-13 041500.jpg"}

];
var allSongs=document.querySelector("#all-songs")
var poster=document.querySelector("#left")
var play=document.querySelector("#play")
var forward=document.querySelector("#forward")
var backward=document.querySelector("#bacckward")


var audio=new Audio();
var selectedSong=0;

function main(){
    var clutter="";
    arr.forEach(function(element,index ) {
    clutter+=`<div id=${index} class="song-card" >
    <div class="part1">
        <img src="${element.img}" alt="">
        <h2>${element.name}</h2>
    </div>
    <h6>3:59</h6>
    </div>`
})
audio.src=arr[selectedSong].url
allSongs.innerHTML=clutter

poster.style.backgroundImage=`url(${arr[selectedSong].img})`
poster.style.backgroundImage=`url(${arr[selectedSong].img})`;
}

main();


allSongs.addEventListener("click",function(dets){
    selectedSong=dets.target.id
    main();
    play.innerHTML=`<i class="ri-pause-circle-line"></i>`
    audio.play()
}
)

var flag=0;
play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-circle-line"></i>`
        main();
        audio.play()
        flag=1;
    }else{
        play.innerHTML=`<i class="ri-play-circle-line"></i>` 
        main();
        audio.pause() 
        flag=0; 
    }
    
})

forward.addEventListener("click",function(){
    if(selectedSong<arr.length-1){
        selectedSong++
        main()
        audio.play()
    }else{
        forward.style.opacity=0.4
    }
   
})
backward.addEventListener("click",function(){
    if(selectedSong>=0){
        --selectedSong
        main()
        audio.play()
    }else{
        backward.style.opacity=0.4
    }
   
})