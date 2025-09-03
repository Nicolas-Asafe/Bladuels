import Material from "./entitie.js";
import Materials from "./materials_data.js";
import serviceMaterials from "./service.js";

const MaterialsService = new serviceMaterials(Materials);
function InitializeMaterials() {    
    const Wood = new Material("Wood", 10);
    const Iron = new Material("Iron", 20);
    const Gold = new Material("Gold", 30);
    const BirdTear = new Material("BirdTear", 34);
    const Diamond = new Material("Diamond", 40);
    const Emerald = new Material("Emerald", 50);
    const titanium = new Material("Titanium", 60);
    const Candy = new Material("Candy", 70);
    const Star = new Material("Star", 80);
    const MoonCrystal = new Material("MoonCrystal", 90);
    const Ruby = new Material("Ruby",190)
    const Curse = new Material("Curse",202)
    const IceHeart = new Material("IceHeart",340)
    const GhostWood = new Material("GhostWood",400)
    const TitanBones = new Material("TitanBones")
    const DragonScale = new Material("DragonScale",600)
    const LiquidFire = new Material("LiquidFire",900)
    Materials.push(Wood, Iron, Gold, Diamond, Emerald, titanium, Candy, Star, MoonCrystal, BirdTear,Ruby,Curse,DragonScale,GhostWood,TitanBones,IceHeart,
        LiquidFire
    ); 
}

export {InitializeMaterials, MaterialsService};