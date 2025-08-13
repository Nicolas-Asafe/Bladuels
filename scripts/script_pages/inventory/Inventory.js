import currentUser from "../CreateAccount.js";
import RenderInventoryMaterials from "./Materials.js";
import RenderInventorySwordsAndPossibleSwords from "./Swords.js";
import PlaySound_click from "../../ClickSound/main.js";
import RenderInventoryShieldsAndPossibleShields from "./Shields.js";

const BtnShow = document.querySelector(".OpenBackPack")
const BackPackDiv = document.querySelector(".BackPack")
function ShowOrHideInventory() {
    PlaySound_click()
    if (BackPackDiv.style.display === "flex") {
        BackPackDiv.style.display = "none"
    } else {
        BackPackDiv.style.display = "flex"
    }
}
if (BtnShow || document.location.href === "./index.html") {
    BtnShow.addEventListener("click", ShowOrHideInventory)
    document.addEventListener("keydown", function (event) {
        if (event.key === "e") {
            ShowOrHideInventory()
            return
        }
    })
}
export function CreateSword(sword) {
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
    RenderInventoryShieldsAndPossibleShields();
}
export function CreateShield(shield) {
    shield.materials.forEach(([matName, qty]) => {
        for (let i = 0; i < qty; i++) {
            currentUser.RemoveMaterial(matName);
        }
    });

    currentUser.AddShield(shield);

    const som = document.getElementById("SoundCreateSword");
    if (som) {
        som.currentTime = 0;
        som.play();
    }

    RenderInventoryMaterials();
    RenderInventorySwordsAndPossibleSwords();
    RenderInventoryShieldsAndPossibleShields();
}
