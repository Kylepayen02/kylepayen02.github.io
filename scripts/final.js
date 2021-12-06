let isPlaying = false; 
let playerShowing = false;

$("#music-player").hide()
$("#quote-1").hide();
$("#quote-2").hide();
$("#thoughts-1").hide();


let audio1 = document.getElementById("audio-1");
let page1 = false;

$(document).ready(function(){
    $("#first-box").click(function(){
        page1 = true;
        $("#music-player").hide();
        $("#quote-1").hide();
        $("#quote-2").hide();
        $("#thoughts1").hide();
        $("#first-box").hide(1000);
        $("#first-box").show(1000);
        $("#quote").hide();
        $("#center-container").css("padding-top", "5%");
        $("#quote-1").show(2000);
        if (playerShowing === false){
            $("#music-player").show(2000);
        }
        $("#music-text").hide();
        $("#quote-1").delay(4000).hide(1000);
        $("#thoughts-1").delay(7000).show(1000);
        $("svg").click(function(){
            $("#music-text").show(1000);
            if (isPlaying === false){
                isPlaying = true;
                audio1.play();
            }
            else {
                isPlaying = false; 
                audio1.pause();
            }
        })
    })

    $("#second-box").click(function(){
        page1 = true;
        $("#music-player").hide();
        $("#quote-1").hide();
        $("#quote-2").hide();
        $("#thoughts-1").hide();
        $("#second-box").hide(1000);
        $("#second-box").show(1000);
        $("#quote").hide();
        $("#center-container").css("padding-top", "5%");
        $("#quote-2").show(2000);
        if (playerShowing === false){
            $("#music-player").show(2000);
        }
        $("#music-text").hide();
        $("#quote-2").delay(4000).hide(1000);
        $("#thoughts-2").delay(7000).show(1000);
        $("svg").click(function(){
            $("#music-text").show(1000);
            if (isPlaying === false){
                isPlaying = true;
                audio1.play();
            }
            else {
                isPlaying = false; 
                audio1.pause();
            }
        })
    })

    $("#second-box").click(function(){
        page1 = true;
        $("#music-player").hide();
        $("#quote-1").hide();
        $("#quote-2").hide();
        $("#thoughts-1").hide();
        $("#second-box").hide(1000);
        $("#second-box").show(1000);
        $("#quote").hide();
        $("#center-container").css("padding-top", "5%");
        $("#quote-2").show(2000);
        if (playerShowing === false){
            $("#music-player").show(2000);
        }
        $("#music-text").hide();
        $("#quote-2").delay(4000).hide(1000);
        $("#thoughts-2").delay(7000).show(1000);
        $("svg").click(function(){
            $("#music-text").show(1000);
            if (isPlaying === false){
                isPlaying = true;
                audio1.play();
            }
            else {
                isPlaying = false; 
                audio1.pause();
            }
        })
    })
    
})

