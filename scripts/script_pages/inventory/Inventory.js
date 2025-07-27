import currentUser from "../CreateAccount.js";
import RenderInventoryMaterials from "./Materials.js";
import RenderInventorySwordsAndPossibleSwords from "./Swords.js";
import PlaySound_click from "../../ClickSound/main.js";

const BtnShow = document.querySelector(".OpenBackPack")
const BackPackDiv = document.querySelector(".BackPack")
BtnShow.addEventListener("click",()=>{
    PlaySound_click()
    if (BackPackDiv.style.display === "flex"){
        BackPackDiv.style.display = "none"
    }else{
        BackPackDiv.style.display = "flex"
    }
})
export default function CreateSword(sword) {
    sword.materials.forEach(([matName, qty]) => {
        for (let i = 0; i < qty; i++) {
            currentUser.RemoveMaterial(matName);
        }
    });

    currentUser.AddSword(sword);

    const som = document.getElementById("SoundCreateSword");
    if (som) {
        som.currentTime = 0;
        som.play();
    }

    RenderInventoryMaterials();
    RenderInventorySwordsAndPossibleSwords();
}
