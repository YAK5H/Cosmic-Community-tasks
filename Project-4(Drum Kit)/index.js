for(let i =0; i<((document.querySelectorAll(".buttons")).length); i++){
    document.querySelectorAll(".buttons")[i].addEventListener("click",function(){
        addSound(this.textContent);
        addAnimation(this.textContent);
    }
);
}


document.addEventListener("keypress",function(event){
    addSound(event.key);
    addAnimation(event.key);
})

function addSound(key){
    switch(key){
        case 'w':
            var audio = new Audio("w.mp3")
            audio.play();
            break;

        case 'a':
            var audio = new Audio("a.mp3")
            audio.play();
            break;

        case 's':
            var audio = new Audio("s.mp3")
            audio.play();
            break;

        case 'd':
            var audio = new Audio("d.mp3")
            audio.play();
            break;

        case 'j':
            var audio = new Audio("j.mp3")
            audio.play();
            break;

        case 'k':
            var audio = new Audio("k.mp3")
            audio.play();
            break;

        case 'l':
            var audio = new Audio("l.mp3")
            audio.play();
            break;

        default:
            break;
    }
}

function addAnimation(key){
    var activeButton = document.querySelector("."+key);
    if (activeButton) {
        activeButton.classList.add("pressed");

        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}



