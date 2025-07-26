const InventoryMaterials = document.querySelector(".materials-list");
import currentUser from "../CreateAccount.js";
import { MaterialsService } from "../../materials/main.js";


export default function RenderInventoryMaterials() {
    InventoryMaterials.innerHTML = ``;
    const fragment = document.createDocumentFragment();

    currentUser.Materials.forEach(([name, qty]) => {
        const material = MaterialsService.getMaterialByName(name);
        if (!material) return;

        for (let i = 0; i < qty; i++) {
            const matDiv = document.createElement("div");
            matDiv.className = "material-item";

            const matImg = document.createElement("img");
            matImg.src = material.image_url;
            matImg.alt = material.name;
            matImg.className = "material-image";

            matDiv.appendChild(matImg);
            fragment.appendChild(matDiv);
        }
    });

    InventoryMaterials.appendChild(fragment);
}
