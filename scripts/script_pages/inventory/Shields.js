import PlaySound_click from "../../ClickSound/main.js";
import { ShowModalShield } from "./modalShield.js";
import { ShieldsForCreate } from "../../BreedingAnvil/main.js";
import currentUser from "../CreateAccount.js";
import { Shields_list } from "../../shields/main.js";
import { CreateShield } from "./Inventory.js";


function RenderInventoryShieldsAndPossibleShields() {
    const InventoryShields = document.querySelector(".shields-list");
    if(InventoryShields)InventoryShields.innerHTML = "";
    const fragment = document.createDocumentFragment();

    currentUser.Shields.forEach(sh => {
        const shieldDiv = document.createElement("div");
        shieldDiv.className = "shield-item";

        const img = document.createElement("img");

        if (Array.isArray(sh.image_url)) {
            img.src = sh.image_url[0];
        } else {
            img.src = sh.image_url;
        }

        img.alt = sh.name;
        img.className = "shield-image";

        shieldDiv.appendChild(img);
        fragment.appendChild(shieldDiv);

        shieldDiv.addEventListener("click", () => {
            ShowModalShield(sh);
            PlaySound_click();
        });
    });

    const shieldsCraft = ShieldsForCreate();
    shieldsCraft.forEach(shield => {
        const shieldDiv = document.createElement("div");
        shieldDiv.className = "shield-item";

        const imgShield = document.createElement("img");
        if (Array.isArray(shield.image_url)) {
            imgShield.src = shield.image_url[0];
        } else {
            imgShield.src = shield.image_url;
        }

        imgShield.alt = shield.name;
        imgShield.className = "shield-image";

        const lockDiv = document.createElement("div");
        lockDiv.className = "lock";

        const lockImg = document.createElement("img");
        lockImg.src = "../../assets/images/others/CreateSword/use.gif";

        lockDiv.appendChild(lockImg);

        lockDiv.addEventListener("click", () =>CreateShield(shield));

        shieldDiv.appendChild(imgShield);
        shieldDiv.appendChild(lockDiv);
        fragment.appendChild(shieldDiv);
    });

    if(InventoryShields)InventoryShields.appendChild(fragment);
}


export default RenderInventoryShieldsAndPossibleShields;
