const body = document.querySelector("body")
body.classList.add("changeBackground")


const tween = KUTE.fromTo(
    '#blob1',
    {path: '#blob1'},
    {path: '#blob2'},
    {repeat: 999, duration: 3000, yoyo: true}
)

tween.start()

   
// defining blob and text variables

const blob1 = document.querySelector("#blob1")
const blob2 = document.querySelector("#blob2")
const text = document.querySelector("#intro") 


//adding event listeners to the blobs and text so that when hovered over the text and blobs invert colour

blob1.addEventListener("mouseover", changeText)
blob1.addEventListener("mouseout", revertText)
blob2.addEventListener("mouseover", changeText)
blob2.addEventListener("mouseout", revertText)
text.addEventListener("mouseover", keepBackground)

function changeText(){
    text.style.color = "#2B2B52"
    blob1.style.fill = "white"
    blob2.style.fill = "white"
}

function revertText(){
    text.style.color = "white"
    blob1.style.fill = "transparent"
    blob2.style.fill = "transparent"
}


function keepBackground(){
    blob1.style.fill = "white"
    blob2.style.fill = "white"
    text.style.color = "#2B2B52"
}

const work = call(".seeWork")
const workText = call(".workText")
work.addEventListener("mouseover", extentMargin)
work.addEventListener("mouseout", revertMargin)

function extentMargin(){
    workText.style.marginRight = "2vw"
}
function revertMargin(){
    workText.style.marginRight = "1vw"
}





function call(item){
    return document.querySelector(item);
}


