var acceptedNotes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

function keypressHandler(e){
    // if you pressed on a real note key
    if (acceptedNotes.includes(e.key)){
        const currentBlock = document.getElementById(e.key);
        // TODO set background color == text color
        currentBlock.classList.toggle("blockPressed");
        //switch back to regular css after 1 second
        setTimeout(()=>{
            currentBlock.classList.toggle("blockPressed");
        }, 1000)

    }
}

//add a keypress listener to the page
window.addEventListener("keypress", keypressHandler);