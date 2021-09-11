document.body.addEventListener('keyup' , (event)=>{
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click' ,()=>{
    let song = document.querySelector('#input').value;
    
    if( song !==''){
        let songArray=song.split('');
        playComposition(songArray);
    }
});

document.querySelector('.repeat').addEventListener('click' ,()=>{
    let song2 = document.querySelector('#input').value;
    
   
    setInterval(()=>{ if( song2 !==''){
        let songArray2=song2.split('');
        playComposition(songArray2);

    }},3000)
});

function playSound (sound){
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime=0;
        audioElement.play();
    }
    if( keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active')
        },350);
    }
}
function playComposition(songArray){
    let wait=0;

    for( let songItem of songArray){
        setTimeout(()=>{
             playSound(`key${songItem}`);
        },wait)
        wait +=350;
      
    }
}

function playComposition(songArray2){
    let wait2=0;

    for( let songItem2 of songArray2){
        setTimeout(()=>{
             playSound(`key${songItem2}`);
        },wait2)

       wait2 +=350;
    }
}