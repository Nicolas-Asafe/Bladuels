function LoadThisPage(seconds = 2) {
    const loadDiv = document.createElement("div")
    const loadImg = document.createElement("img")

    loadImg.src = "../../assets/images/others/Load/use.gif"
    loadDiv.appendChild(loadImg)
    loadDiv.classList.add("load-div")

    document.body.appendChild(loadDiv)
    setTimeout(()=>{
        document.body.removeChild(loadDiv)
    },seconds*1000)
}
LoadThisPage(5)