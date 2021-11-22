const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const button3 = document.getElementById("button-3")

let centerImg = document.getElementById("center-img")

let display = 0 

let image = document.createElement("img")

button1.addEventListener("click", displayImg1)
button2.addEventListener("click", displayImg2)
button3.addEventListener("click", displayImg3)

function displayImg1() {
    if (display == 0){
        setImage("https://static01.nyt.com/images/2018/10/22/us/23xp-trans3/merlin_145654398_6edcf2cb-3fb4-4724-bff7-7eb4f63587e2-superJumbo.jpg")
    }
    else{
        image.parentNode.removeChild(image)
        display = 0
    }
}

function displayImg2() {
    if (display == 0){
        setImage("https://www.iberdrola.com/wcorp/gc/prod/en_US/comunicacion/inteligencia_colectiva_1_res/Inteligencia_Colectiva_746x419.jpg")
    }
    else{
        image.parentNode.removeChild(image)
        display = 0
    }
}

function displayImg3() {
    if (display == 0){
        setImage("https://i2.wp.com/atlassianblog.wpengine.com/wp-content/uploads/2019/09/conquering-information-silos-at-work_featured.jpg?fit=2048%2C997&ssl=1")
    }
    else{
        image.parentNode.removeChild(image)
        display = 0
    }
}

function setImage(url) {
    centerImg.appendChild(image)
    image.setAttribute("src", url)
    image.setAttribute("height", "400px")
    image.setAttribute("width", "400px")
    display = 1
}