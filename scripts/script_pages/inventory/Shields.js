import {Shields_list} from "../../shields/main.js";
import PlaySound_click from "../../ClickSound/main.js";
import { ShowModalShield } from "./modalShield.js";
const InventoryShields = document.querySelector(".shields-list")

function RenderInventoryShields(){
    InventoryShields.innerHTML = ""
   const fragment = document.createDocumentFragment();
    Shields_list.forEach(sh=>{
        const shieldDiv = document.createElement("div");
        shieldDiv.className = "shield-item";

        const img = document.createElement("img");
        img.src = sh.image_url[0];
        img.alt = sh.name;
        img.className = "shield-image";
        shieldDiv.appendChild(img);
        fragment.appendChild(shieldDiv);
        shieldDiv.addEventListener("click",()=>{
            ShowModalShield(sh)
            PlaySound_click()
        })        
    })
    InventoryShields.appendChild(fragment)
}
export default RenderInventoryShields