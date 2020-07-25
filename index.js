var numberOfDrums =  document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       var buttoninnerhtml = this.innerHTML;
       makesSound(buttoninnerhtml);
    });
}

    document.addEventListener("keypress", function(event){
            makesSound(event.key);
    });

    function makesSound(key){
        switch(key){
            case "T":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            case "Y":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            case "F":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
            case "G":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            case "H":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            case "J":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
            case "B":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
 
            default: console.log(key);
        }
    }





