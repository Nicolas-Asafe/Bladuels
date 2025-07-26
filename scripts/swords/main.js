import ServiceSwords from "./service.js";
import Sword from "./entitie.js";
import Swords from "./swords_data.js";


function InitializeSwords(){
    const NoobSword = new Sword({name: "NoobSword", damage: 0.2, price: 0,level:0,life:3,materials: [["Wood",3]]});   
    const CandySword = new Sword({name: "CandySword", damage: 0.4, price: 1,level:0,life:6,materials: [["Candy",7]]});
    const KnifeSword = new Sword({name: "Knife", damage: 0.6, price: 3,level:0,life:9,materials: [["Iron",3],["Wood",2]]});
    const IronSword = new Sword({name: "IronSword", damage: 1, price: 5,level:0,life:15,materials:[["Iron",4],["Wood",2]]});
    const WaterSword = new Sword({name: "WaterSword", damage: 3, price: 10,level:0,life:20,materials:[["BirdTear",5],["Gold",2],["Titanium",2]]});
    const DiamondSword = new Sword({name: "DiamondSword", damage: 10, price: 50,level:0,life:50,materials:[["Diamond",5],["Gold",3],["Titanium",2]]});
    const TitaniumSword = new Sword({name: "TitaniumSword", damage: 20, price: 100,level:0,life:100,materials:[["Titanium",5],["Gold",3],["Iron",2]]});
    const MoonSword = new Sword({name: "MoonSword", damage: 50, price: 200,level:0,life:200,materials:[["MoonCrystal",5],["Gold",4]]});
    const GoldSword = new Sword({name: "GoldSword", damage: 55, price: 300,level:0,life:300, materials:[["Gold",20],["Titanium",3]]});
    const MidNightAxe = new Sword({name: "MidnightAxe", damage: 100, price: 500,level:0,life:500,materials:[["MoonCrystal",5],["Titanium",13],["Emerald",5],["Wood",10]]});
    const TitaniumAxe = new Sword({name: "TitaniumAxe", damage: 150, price: 1000,level:0,life:1000,materials:[["Titanium",20],["Gold",10],["Iron",4],["Wood",15]]});
    const RubySword = new Sword({name: "RubySword", damage: 300, price: 1200,level:0,life:600,materials:[["Ruby",18],["Titanium",7],["Gold",15]]});
    const StarSword = new Sword({name: "StarSword", damage: 360, price: 1320,level:0,life:780,materials:[["Star",23],["Titanium",7],["Gold",15],["MoonCrystal",5]]});
    const EmeraldSword = new Sword({name: "EmeraldSword", damage: 400, price: 1500,level:0,life:1000,materials:[["Emerald",20],["Titanium",10],["Gold",4]]});
    const MoonLightSword = new Sword({name: "MoonLightSword", damage: 500, price: 2000,level:0,life:1500,materials:[["MoonCrystal",11],["Titanium",10],["Diamond",10],["Star",10]]});
    Swords().push(NoobSword, CandySword, IronSword,WaterSword,KnifeSword,DiamondSword,
        GoldSword,TitaniumSword,MoonLightSword,MoonSword,MidNightAxe,TitaniumAxe,RubySword,StarSword,EmeraldSword);
    }
    const serviceSwords = new ServiceSwords(Swords);    
    
    export {serviceSwords,InitializeSwords};