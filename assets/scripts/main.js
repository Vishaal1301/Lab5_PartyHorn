// main.js

document.getElementById("honk-btn").type = "button";
document.getElementById("honk-btn").addEventListener("click", buttonPress);

document.getElementById("volume-slider").addEventListener("input", changeVolSlider);
document.getElementById("volume-number").addEventListener("input", changeVolNumber);
document.getElementsByName("radio-sound").addEventListener("change", changeHorn());

function changeVol(vol){
    let audio = document.getElementById("horn-sound");
    audio.volume = vol;
}

function changeVolIcon(vol){
    let volImg = document.getElementById("volume-image"); 

    if( vol >= 67){
        volImg.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
    }
    else if( vol >= 34){
        volImg.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
    }
    else if(vol >= 1){
        volImg.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
    }
    else{
        volImg.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
    }
}

function changeVolNumber(){
    let volNumTxt = document.getElementById("volume-number");
    let volSlider = document.getElementById("volume-slider");
   
    document.getElementById("honk-btn").disabled = false;

    volSlider.value = volNumTxt.value;
    changeVolIcon(volNumTxt.value);

    if(volSlider.value == 0){
        document.getElementById("honk-btn").disabled = true;
    }
}

function changeVolSlider(){
    let volNumTxt = document.getElementById("volume-number");
    let volSlider = document.getElementById("volume-slider");
    
    document.getElementById("honk-btn").disabled = false;
    
    volNumTxt.value = volSlider.value;
    changeVolIcon(volSlider.value);

    if(volNumTxt.value == 0){
        document.getElementById("honk-btn").disabled = true;
    }
}

function changeHorn(){
    let imgToMod = document.getElementById("sound-image");
    let hornToMod = document.getElementById("horn-sound"); 

    document.getElementById("radio-air-horn").addEventListener("change", function() {
        imgToMod.setAttribute("src", "./assets/media/images/air-horn.svg");
        hornToMod.setAttribute("src", "./assets/media/audio/air-horn.mp3");
    });
    
    document.getElementById("radio-car-horn").addEventListener("change", function() {
        imgToMod.setAttribute("src", "./assets/media/images/car.svg");
        hornToMod.setAttribute("src", "./assets/media/audio/car-horn.mp3");
    });

    document.getElementById("radio-party-horn").addEventListener("change", function() {
        imgToMod.setAttribute("src", "./assets/media/images/party-horn.svg");
        hornToMod.setAttribute("src", "./assets/media/audio/party-horn.mp3");
    });
}

function buttonPress(){
    let volNumTxt = document.getElementById("volume-number");
    changeVol(Number(volNumTxt.value)/100);
    document.getElementById("horn-sound").play();
    //alert(document.getElementById("horn-sound").volume)
} 