//add different keys

var acceptedNotes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

function playAudio(note){
    
    var audioPath = "mp3 Notes/" + note + "3.mp3";

    var audio = new Audio(audioPath);
    audio.play();

}



function keypressHandler(e){
    // if you pressed on a real note key
    if (acceptedNotes.includes(e.key)){
        const currentBlock = document.getElementById(e.key);
        currentBlock.classList.toggle("blockPressed");
        //switch back to regular css after 1 second
        playAudio(e.key);
        setTimeout(()=>{
            currentBlock.classList.toggle("blockPressed");
        }, 200)

    }
}

//add a keypress listener to the page
window.addEventListener("keypress", keypressHandler);