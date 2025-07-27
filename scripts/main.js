import currentUser from "./script_pages/CreateAccount.js";
import { InitializeMaterials } from "./materials/main.js";
import { InitializeSwords, serviceSwords } from "./swords/main.js";
import RenderInventoryMaterials from "./script_pages/inventory/Materials.js";
import RenderInventorySwordsAndPossibleSwords from "./script_pages/inventory/Swords.js";

InitializeMaterials();
InitializeSwords();

window.addEventListener("DOMContentLoaded", () => {
    if (currentUser.Init) {
        serviceSwords.getSwords().forEach(s=>{
            currentUser.AddSword(s)
            // s.materials.forEach(m=>{
                // currentUser.AddMaterial(m)
            // })
        })
        currentUser.setInit(false);
    }
    RenderInventoryMaterials();
    RenderInventorySwordsAndPossibleSwords();
});
