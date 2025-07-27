import ServiceSwords from "./service.js";
import Sword from "./entitie.js";
import Swords from "./swords_data.js";


function InitializeSwords(){
    const NoobSword = new Sword({name: "NoobSword", damage: 0.2, price: 0,level:0,life:3,materials: [["Wood",3]]});   
    const CandySword = new Sword({name: "CandySword", damage: 0.4, price: 1,level:0,life:6,materials: [["Candy",7]]});
    const KnifeSword = new Sword({name: "Knife", damage: 0.6, price: 3,level:0,life:9,materials: [["Iron",3],["Wood",2]]});
    const IronSword = new Sword({name: "IronSword", damage: 1, price: 5,level:0,life:15,materials:[["Iron",4],["Wood",2]]});
    const WaterSword = new Sword({name: "WaterSword", damage: 14, price: 10,level:0,life:20,materials:[["BirdTear",12],["Gold",2],["Titanium",2]]});
    const DiamondSword = new Sword({name: "DiamondSword", damage: 10, price: 50,level:0,life:50,materials:[["Diamond",5],["Gold",3],["Titanium",2]]});
    const TitaniumSword = new Sword({name: "TitaniumSword", damage: 20, price: 100,level:0,life:100,materials:[["Titanium",5],["Gold",3],["Iron",2]]});
    const MoonSword = new Sword({name: "MoonSword", damage: 50, price: 200,level:0,life:200,materials:[["MoonCrystal",5],["Gold",4]]});
    const GoldSword = new Sword({name: "GoldSword", damage: 55, price: 300,level:0,life:300, materials:[["Gold",20],["Titanium",3]]});
    const MidNightAxe = new Sword({name: "MidnightAxe", damage: 100, price: 500,level:0,life:500,materials:[["MoonCrystal",5],["Titanium",13],["Emerald",5],["Wood",10]]});
    const ShiningSword = new Sword({name:"ShiningSword",damage:230,price: 1200,level:0,life:1100,materials:[["Star",12],["Wood",8],["Gold",15],["Emerald",2]]})
    const TitaniumAxe = new Sword({name: "TitaniumAxe", damage: 290, price: 1000,level:0,life:1000,materials:[["Titanium",20],["Gold",10],["Iron",4],["Wood",15]]});
    const RubySword = new Sword({name: "RubySword", damage: 360, price: 1200,level:0,life:600,materials:[["Ruby",18],["Titanium",7],["Gold",15]]});
    const StarSword = new Sword({name: "StarSword", damage: 360, price: 1320,level:0,life:780,materials:[["Star",23],["Titanium",7],["Gold",15],["MoonCrystal",5]]});
    const EmeraldSword = new Sword({name: "EmeraldSword", damage: 400, price: 1500,level:0,life:1000,materials:[["Emerald",20],["Titanium",10],["Gold",4]]});
    const SnowSword = new Sword({name:"SnowSword",damage:510,price:2500,level:0,life:2000,materials:[["Diamond",8],["IceHeart",23],["Wood",6],["Gold",6]]})
    const MoonLightSword = new Sword({name: "MoonLightSword", damage: 600, price: 3000,level:0,life:1500,materials:[["MoonCrystal",11],["Titanium",10],["Diamond",10],["Star",10]]});
    const GoldenSickle = new Sword({name:"GoldenSickle",damage:700,price:4000,level:0,life:2000,materials:[["Gold",20],["Titanium",12],["Iron",20]]})
    const CandyPoison = new Sword({name:"CandyPoison",damage:700,price:3200,level:0,life:1600,materials:[["Candy",21],["Emerald",12],["Curse",20]]})
    const CursedAxe = new Sword({name:"CursedAxe",damage:900,price:5000,level:0,life:4000,materials:[["Curse",20],["MoonCrystal",15],["Wood",12],["Ruby",8]]})
    const StarCurse = new Sword({name:"StarCurse",damage:2200,price:7000,level:0,life:7000,materials:[["Curse",18],["MoonCrystal",12],["Star",7],["Ruby",16]]})
    const GhostTears = new Sword({name:"GhostTears",damage:2400,price:8000,level:0,life:8000,materials:[["GhostWood",12],["Titanium",8],["BirdTear",23]]})
    const FrozenSickle = new Sword({name:"FrozenSickle",damage:2999,price:8999,level:0,life:18999,materials:[["IceHeart",52]]})
    const BoneColossus = new Sword({name:"BoneColossus",damage:3000,price:9000,level:0,life:9000,materials:[["TitanBones",18],["Titanium",12],["GhostWood",12],["Curse",10]]})
    const DragonsRage = new Sword({name:"DragonsRage",damage:4500,price:10000,level:0,life:10000,materials:[["DragonScale",20],["Emerald",7],["Gold",12],["Ruby",3]]})
    const FrozenDragonFury = new Sword({name:"FrozenDragonFury",damage:6000,price:15000,level:0,life:23000,materials:[["DragonScale",20],["IceHeart",20]]})
    const FrozenCurseNoobSword = new Sword({name:"FrozenCurseNoobSword",damage:39000,price:300000,level:0,life:39000,materials:[["IceHeart",230],["Curse",70]]})
    Swords().push(NoobSword, CandySword, IronSword,WaterSword,KnifeSword,DiamondSword,
        GoldSword,TitaniumSword,SnowSword,MoonLightSword,MoonSword,MidNightAxe,TitaniumAxe,RubySword,ShiningSword,StarSword,EmeraldSword,CursedAxe,GoldenSickle,StarCurse,GhostTears,CandyPoison,FrozenSickle,BoneColossus,DragonsRage,FrozenDragonFury,FrozenCurseNoobSword);
    }
    const serviceSwords = new ServiceSwords(Swords);    
    
    export {serviceSwords,InitializeSwords};