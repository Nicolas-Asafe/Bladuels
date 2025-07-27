const InventorySwords = document.querySelector(".swords-list");
import SwordsForCreate from '../../BreedingAnvil/main.js'
import PlaySound_click from '../../ClickSound/main.js';
import currentUser from "../CreateAccount.js";
import CreateSword from './Inventory.js';
import ShowModal from './modalSword.js';


export default function RenderInventorySwordsAndPossibleSwords() {
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
        swordDiv.addEventListener("click",()=>{
            ShowModal(sword)
            PlaySound_click()
        })
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