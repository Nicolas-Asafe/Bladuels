import Material from "./entitie.js";
import Materials from "./materials_data.js";
import serviceMaterials from "./service.js";

const MaterialsService = new serviceMaterials(Materials);
function InitializeMaterials() {    
    const Wood = new Material("Wood", 10);
    const Iron = new Material("Iron", 20);
    const Gold = new Material("Gold", 30);
    const Diamond = new Material("Diamond", 40);
    const Emerald = new Material("Emerald", 50);
    const titanium = new Material("Titanium", 60);
    const Candy = new Material("Candy", 70);
    const Star = new Material("Star", 80);
    const MoonCrystal = new Material("MoonCrystal", 90);
    const Ruby = new Material("Ruby",190)
    const BirdTear = new Material("BirdTear", 100);
    Materials.push(Wood, Iron, Gold, Diamond, Emerald, titanium, Candy, Star, MoonCrystal, BirdTear,Ruby);
}

export {InitializeMaterials, MaterialsService};