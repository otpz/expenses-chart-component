const graphicsDOM = document.querySelectorAll(".message-box")
const infoDOM = document.querySelectorAll(".money-info")

for (let i = 0; i < graphicsDOM.length; i++) {
    graphicsDOM[i].addEventListener("mouseover", mouseHover)
    function mouseHover(){
        if(infoDOM[i].classList.contains("hidden")){
                infoDOM[i].classList.remove("hidden")
        }else{
            infoDOM[i].classList.add("hidden")
        }
    }
}


