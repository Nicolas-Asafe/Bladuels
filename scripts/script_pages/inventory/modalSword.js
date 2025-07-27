import PlaySound_click from "../../ClickSound/main.js"


function CreateModal(Sword){
    const Modal = document.createElement("div")
    const ImgSwordOfModal = document.createElement("img")
    const NameSword = document.createElement("h1")
    const DamageSword = document.createElement("p")
    const Life = document.createElement("p")
    const Level = document.createElement("p")
    const Price = document.createElement("p")
    ImgSwordOfModal.src = Sword.image_url
    NameSword.textContent = Sword.name
    DamageSword.textContent = "Damage: " + Sword.damage
    Life.textContent = "Life " + Sword.life
    Level.textContent = "Level " + Sword.level
    Price.textContent = "Price "+ Sword.price
    Modal.classList.add("Modal")
    const elements = [ImgSwordOfModal,NameSword,DamageSword,Life,Level,Price]
    elements.forEach(e=>{
        Modal.appendChild(e)
    })

    Modal.addEventListener("click",()=>{
        document.body.removeChild(Modal)
        PlaySound_click()
    })
    document.body.appendChild(Modal)
}

export default function ShowModal(Sword){
    const Modal = document.querySelector(".Modal")
    if(!Modal){
        CreateModal(Sword)
    }
}