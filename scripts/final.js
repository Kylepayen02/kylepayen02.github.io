let isPlaying = false; 
let playerShowing = false;

$("#music-player").hide()
$("#quote-1").hide();
$("#thoughts-1").hide();
$("#next").hide(); 
$("#previous").hide(); 
$("#grid-container").hide();
$(".container").hide();
$("#conclusion-left").hide();
$("#conclusion-center").hide();
$("#conclusion-right").hide();


let audio = document.getElementsByTagName("audio");
let page1;
let page2; 
let page3;

let textCounter = 0; 


function stopAllMusic(){
    for (i=0; i<audio.length; i++){
        audio[i].pause();
        audio[i].currentTime = 0; 
    }
}

function stopAllAnimation(){
    $("#quote").stop(true, false);
    $("#quote-1").stop(true, false);
    $("#thoughts-1").stop(true, false);
    $("#theme").stop(true, false); 
    $("#text-center").stop(true, false); 
}

function hideAllText(){
    $("#quote").hide();
    $("#quote-1").hide();
    $("#thoughts-1").hide();
    $("#grid-container").hide();
    //hide the previous and next button 
    $("#next").hide(); 
    $("#previous").hide();
    $(".container").hide();
    $("#conclusion-left").hide();
    $("#conclusion-center").hide();
    $("#conclusion-right").hide();
}



$(document).ready(function(){

    //----------------------------------------------First Tab------------------------------------------------------------- 

    $("#first-box").unbind().click(function(){

        console.log(`The playershowing for page 1 is: ${playerShowing}`)

        if (playerShowing === true){
            $("#pause").hide();
            $("#play").show();
        }


        //ensure that first page has initial background gradient
        $("body").removeClass();
        $("body").addClass("first-page");


        stopAllMusic(); 

        //make sure any already running animations stop 
        stopAllAnimation();

        // First hide everthing 

        hideAllText();
        
        $("#center-container").css("display", "flex")

        // Make the first box fade and come back 
        $("#first-box").hide(1000);
        $("#first-box").show(1000);


        // hide the "All About Love"
        $("#quote").fadeOut(1000, function(){
            $("#center-container").css("padding-top", "5%");
            $("#quote-1").fadeIn(2000, function(){
                $("#quote-1").fadeOut(8000, function(){
                    $("#thoughts-1").fadeIn(2000)
                })
            });
        });

        //Show the music plater and hide the music text
        if (playerShowing === false){
            playerShowing = true; 
            $("#music-player").show(2000);
            $("#pause").hide();
        }
        $("#music-text").hide(function(){
            $(this).text("Now Playing: Raury - Love is a Not a Four Letter Word");
        });
        
        //make the icons change if the music is playing or not 
        $("i").unbind().click(function(){
            $("#music-text").fadeIn(1000);
            if (isPlaying === false){
                isPlaying = true;
                $("#play").hide(); 
                $("#pause").show();;
                audio[0].play();
            }
            else {
                isPlaying = false;
                $("#pause").hide(); 
                $("#play").show();;
                audio[0].pause();
            }
        })
    })

    //---------------------------------------------------Second Tab--------------------------------------------------------

    $("#second-box").unbind().click(function(){

        console.log(`The playershowing for page 2 is: ${playerShowing}`)

        $("#second-box").hide(1000);
        $("#second-box").show(1000);

        $("body").removeClass()
        $("body").addClass("second-page")
        
        page2 = true; 

        if (playerShowing === true){
            $("#pause").hide();
            $("#play").show();
        }

        console.log(`The playershowing for page 2 is: ${playerShowing}`)

        stopAllAnimation();
        stopAllMusic();

        hideAllText();

        $("#next").show();
        $("#previous").show(); 

        $("#center-container").css("display", "none");
        $("#grid-container").show(2000); 

        if (page2 === true){
            $("#next").unbind().click(function(){
    
                //Transition justice quote -> personal text

                console.log(textCounter);
    
                if (textCounter === 0){
                    $("#text-center").fadeOut(1000, function(){
                        $(this).text("A lack of justice in our relationships, whether romantic or platonic, stands in the way of us knowing true love. Without justice the foundation of our relationships is inequitable, allowing feelings of resentment to ferment. A relationship where one's agency and autonomy is not respected cannot foster love.").fadeIn(1000);
                    })
                    textCounter = 1;
                }
    
                // Transition Justice -> Greed 
                else if (textCounter === 1){
                    // Fade Out text already there
                    $("#theme").fadeOut(1000, function(){
                        $(this).text("Greed").fadeIn(1000);
                    })
                    $("#text-center").fadeOut(1000, function(){
                        $(this).text('"Materialism creates a world of narcissism in which the focus of life is solely on acquisition and consumption"').fadeIn(1000);
                    })
                    textCounter = 2;
                }
                else if (textCounter === 2){
                    $("#text-center").fadeOut(1000, function(){
                        $(this).text("Materialism is overly enouraged in our society, allowing greed to become one of our vices. Greed cannot thrive unless we support domination over one another, and this creates a space where love cannot prosper.").fadeIn(1000);
                    })
                    textCounter = 3;
                }
                else if (textCounter === 3){
                    $("#theme").fadeOut(1000, function(){
                        $(this).text("Commitment").fadeIn(1000);
                    })
                    $("#text-center").fadeOut(1000, function(){
                        $(this).text('"Genuine love is rarely an emotional space where needs are instantly gratified. To know love we have to invest time and commitment…"').fadeIn(1000);
                    })
                    textCounter = 4;
                }
                else if (textCounter === 4){
                    $("#text-center").fadeOut(1000, function(){
                        $(this).text("The expectation of instant gratification is exacerbated under our attention economy. This has eroded our ability to commit to each other's growth, making people disposable. To create a world where true love can prosper, there must be a deep recokining of how much effort and commitment we invest in our relationships.").fadeIn(1000);
                    })
                    textCounter = 5
                }
            })
    
            $("#previous").unbind().click(function(){

                console.log(textCounter);

                // Transition Greed -> Justice personal thoguhts  
                if (textCounter === 5){
                    // Fade Out text already there
                    $("#text-center").fadeOut(1000, function(){
                        $(this).text('"Genuine love is rarely an emotional space where needs are instantly gratified. To know love we have to invest time and commitment…"').fadeIn(2000);
                    })
                    textCounter = 4;
    
                }

                else if (textCounter === 4){
                    // Fade Out text already there
                    $("#theme").fadeOut(1000, function(){
                        $(this).text("Greed").fadeIn(2000);
                    })
                    $("#text-center").fadeOut(1000, function(){
                        $(this).text("Materialism is overly enouraged in our society, allowing greed to become one of our vices. Greed cannot thrive unless we support domination over one another, and this creates a space where love cannot prosper").fadeIn(2000);
                    })
                    textCounter = 3;
                }

                else if (textCounter === 3){ 
                    $("#text-center").fadeOut(1000, function(){
                        $(this).text('"Materialism creates a world of narcissism in which the focus of life is solely on acquisition and consumption"').fadeIn(2000);
                    })
                    textCounter = 2; 
                }

                else if (textCounter === 2){
                    $("#theme").fadeOut(1000, function(){
                        $(this).text("Justice").fadeIn(2000);
                    })
                    $("#text-center").fadeOut(1000, function(){
                        $(this).text("A lack of justice in our relationships, whether romantic or platonic, stands in the way of us knowing true love. Without justice the foundation of our relationships is inequitable, allowing feelings of resentment to ferment. A relationship where one's agency and autonomy is not respected cannot foster love.").fadeIn(2000);
                    })
                    textCounter = 1;
                }

                else if(textCounter === 1){
                    $("#text-center").fadeOut(1000, function(){
                        $(this).text('“In a society like ours, where children are denied full civil rights, it’s absolutely critical that parenting adults learn how to offer loving discipline. Setting boundaries and teaching children how to set boundaries for themselves prior to misbehavior is an essential part of loving parenting."').fadeIn(2000);
                    })
                    textCounter = 0; 
                }
        
            })

            //Show the music plater and hide the music text
            if (playerShowing === false){
                playerShowing = true; 
                $("#music-player").show(2000);
                $("#pause").hide();
            }
            $("#music-text").hide(function(){
                $(this).text("Now Playing: Amy Winehouse - Love is a Losing Game")
            });
            
            //make the icons change if the music is playing or not 
            $("i").unbind().click(function(){
                $("#music-text").fadeIn(1000);
                if (isPlaying === false){
                    isPlaying = true;
                    $("#play").hide(); 
                    $("#pause").show();;
                    audio[1].play();
                }
                else {
                    isPlaying = false;
                    $("#pause").hide(); 
                    $("#play").show();;
                    audio[1].pause();
                }
            })
        }

    })

    // --------------------------------------------------Third Tab---------------------------------------------------


    $("#third-box").unbind().click(function(){

        $("#third-box").hide(1000);
        $("#third-box").show(1000);

        $("body").removeClass()
        $("body").addClass("third-page")

        if (playerShowing === true){
            $("#pause").hide();
            $("#play").show();
        }

        stopAllAnimation();
        stopAllMusic();

        hideAllText();

        if (playerShowing === true){
            $("#pause").hide();
            $("#play").show();
        }
        
        stopAllAnimation();
        stopAllMusic();
        
        hideAllText();
        
        $("#conclusion-left").show(1000);
        $("#conclusion-center").show(2000);
        $("#conclusion-right").show(3000);

         //Show the music plater and hide the music text
         if (playerShowing === false){
            playerShowing = true; 
            $("#music-player").show(2000);
            $("#pause").hide();
        }

        $("#music-text").hide(function(){
            $(this).text("Now Playing: Baby Rose - Show you")
        });
        
        //make the icons change if the music is playing or not 
        $("i").unbind().click(function(){
            $("#music-text").fadeIn(1000);
            if (isPlaying === false){
                isPlaying = true;
                $("#play").hide(); 
                $("#pause").show();;
                audio[2].play();
            }
            else {
                isPlaying = false;
                $("#pause").hide(); 
                $("#play").show();;
                audio[2].pause();
            }
        })
        

    })

})

