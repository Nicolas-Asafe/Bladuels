import PlaySound_click from "../../ClickSound/main.js";

function InitBattle(){
    console.log("Iniciando batalha")
    PlaySound_click()
}
const Btn = document.querySelector(".OpenBattle")

Btn.addEventListener("click",InitBattle)
document.addEventListener("keydown",function (event){
    if (event.key === "b"){
        InitBattle()
        return
    }
})