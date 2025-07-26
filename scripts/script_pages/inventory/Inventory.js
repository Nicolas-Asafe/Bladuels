import currentUser from "../CreateAccount.js";
import RenderInventoryMaterials from "./Materials.js";
import RenderInventorySwordsAndPossibleSwords from "./Swords.js";


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
