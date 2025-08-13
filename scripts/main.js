import currentUser from "./script_pages/CreateAccount.js";
import { InitializeMaterials, MaterialsService } from "./materials/main.js";
import { InitializeSwords, serviceSwords } from "./swords/main.js";
import RenderInventoryMaterials from "./script_pages/inventory/Materials.js";
import RenderInventorySwordsAndPossibleSwords from "./script_pages/inventory/Swords.js";
import RenderInventoryShieldsAndPossibleShields from "./script_pages/inventory/Shields.js";

InitializeMaterials();
InitializeSwords();

window.addEventListener("DOMContentLoaded", () => {
    if (currentUser.Init) {
        currentUser.AddMaterial(["Wood",3])
        currentUser.setInit(false);
    }
    RenderInventoryMaterials();
    RenderInventorySwordsAndPossibleSwords();
    RenderInventoryShieldsAndPossibleShields()
});

function HACK_GMFES(){
    MaterialsService.getMaterials().forEach(m=>{
            currentUser.AddMaterial([m.name,200])
    })
}
function HACK_RDR(){
    RenderInventoryMaterials();
    RenderInventorySwordsAndPossibleSwords();
    RenderInventoryShields()
}


window.HACK_GMFES = HACK_GMFES
window.HACK_RDR = HACK_RDR