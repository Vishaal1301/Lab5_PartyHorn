// main.js

function changeVolume(vol){ //maybe don't need tone
    var audio = document.getElementById("horn-sound");
    audio.volume = vol;

    if(vol == 0){
        //fill
    }
}

function changeVolIcon(vol){
    if( vol >= 67){

    }
    else if( vol >= 34){

    }
    else if(vol >= 1){
        
    }
    else{

    }
}

function changeVolNumber(){
    var volNumTxt = document.getElementById("volume-number");
    var volSlider = document.getElementById("volume-slider");
    
    volSlider.value = volNumTxt.value;
    changeVolume();
    changeVolumeIcon();
}

function changeVolSlider(){
    var volNumTxt = document.getElementById("volume-number");
    var volSlider = document.getElementById("volume-slider");
    
    volNumTxt.value = volSlider.value;
    changeVolume();
    changeVolumeIcon();
}

function changeHorn(){
    var selElem = document.querySelector("input[name=radio-sound]:checked").id;
    var imgToMod = document.getElementById("sound-image"); 

    if(selElem== "radio-air-horn"){
        imgToMod.src = "./assets/media/images/air-horn.svg";
    }
    else if(selElem == "radio-car-horn"){
        imgToMod.src = "./assets/media/images/car-horn.svg";
    }
    else{
        imgToMod.src = "./assets/media/images/party-horn.svg";
    }

    audio.src = "./assets/media/audio/air-horn.mp3";
}

document.getElementById("volume-slider").addEventListener("input", changeVolSlider);
document.getElementById("volume-number").addEventListener("input", changeVolNumber);

document.getElementById(document.querySelector("input[name=radio-sound]:checked")).addEventListener("input", changeHorn());




