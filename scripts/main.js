import currentUser from "./script_pages/CreateAccount.js";
import { InitializeMaterials } from "./materials/main.js";
import { InitializeSwords, serviceSwords } from "./swords/main.js";
import RenderInventoryMaterials from "./script_pages/inventory/Materials.js";
import RenderInventorySwordsAndPossibleSwords from "./script_pages/inventory/Swords.js";
import RenderInventoryShields from "./script_pages/inventory/Shields.js";

InitializeMaterials();
InitializeSwords();

window.addEventListener("DOMContentLoaded", () => {
    if (currentUser.Init) {
        currentUser.AddMaterial(["Wood",3])
        currentUser.setInit(false);
    }
    RenderInventoryMaterials();
    RenderInventorySwordsAndPossibleSwords();
    RenderInventoryShields()
});

function HACK_GMFES(){
     serviceSwords.getSwords().forEach(s=>{
            s.materials.forEach(m=>{
                currentUser.AddMaterial(m)
            })
    })
}
function HACK_RDR(){
    RenderInventoryMaterials();
    RenderInventorySwordsAndPossibleSwords();
    RenderInventoryShields()
}


window.HACK_GMFES = HACK_GMFES
window.HACK_RDR = HACK_RDR