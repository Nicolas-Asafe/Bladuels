import PlaySound_click from "../../ClickSound/main.js"


export function CreateModalShield(Shield){
    const Modal = document.createElement("div")
    const ImgShieldOfModal = document.createElement("img")
    const NameShield = document.createElement("h1")
    const ProtectionShield = document.createElement("p")
    const Life = document.createElement("p")
    const Level = document.createElement("p")
    const Price = document.createElement("p")
    ImgShieldOfModal.src = Shield.image_url[0]
    NameShield.textContent = Shield.name
    ProtectionShield.textContent = "Protection: " + Shield.protection
    Life.textContent = "Life " + Shield.life
    Level.textContent = "Level " + Shield.level
    Price.textContent = "Price "+ Shield.price
    Modal.classList.add("Modal")
    const elements = [ImgShieldOfModal,NameShield,ProtectionShield,Life,Level,Price]
    elements.forEach(e=>{
        Modal.appendChild(e)
    })

    Modal.addEventListener("click",()=>{
        document.body.removeChild(Modal)
        PlaySound_click()
    })
    document.body.appendChild(Modal)
}

export function ShowModalShield(Shield){
    const Modal = document.querySelector(".Modal")
    if(!Modal){
        CreateModalShield(Shield)
    }
}