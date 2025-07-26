import { MaterialsService } from "../materials/main.js";
import SwordsForCreate from "../BreedingAnvil/main.js";
import currentUser from "./CreateAccount.js";

const InventorySwords = document.querySelector(".swords-list");
const InventoryMaterials = document.querySelector(".materials-list");

function RenderInventoryMaterials() {
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

function RenderInventorySwordsAndPossibleSwords() {
    InventorySwords.innerHTML = ``;
    const fragment = document.createDocumentFragment();

    currentUser.Swords.forEach(sword => {
        const swordDiv = document.createElement("div");
        swordDiv.className = "sword-item";

        const img = document.createElement("img");
        img.src = sword.image_url;
        img.alt = sword.name;
        img.className = "sword-image";

        swordDiv.appendChild(img);
        fragment.appendChild(swordDiv);
    });

    InventorySwords.appendChild(fragment);
    SwordsForCreate().forEach(sword => {
        const swordDiv = document.createElement("div");
        swordDiv.className = "sword-item";
        const imgSword = document.createElement("img");
        imgSword.src = sword.image_url;
        imgSword.alt = sword.name;
        imgSword.className = "sword-image";
        const lockDiv = document.createElement("div");
        lockDiv.className = "lock";
        const lockImg = document.createElement("img");
        lockImg.src = "../../assets/images/others/CreateSword/use.gif";
        lockDiv.appendChild(lockImg);
        lockDiv.addEventListener("click", () => CreateSword(sword));
        swordDiv.appendChild(imgSword);
        swordDiv.appendChild(lockDiv);
        fragment.appendChild(swordDiv);
    });
    InventorySwords.appendChild(fragment);
}


function CreateSword(sword) {
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

export {
    RenderInventoryMaterials,
    RenderInventorySwordsAndPossibleSwords,
};
