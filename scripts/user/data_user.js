export default class SectionUserData {
    constructor(Name) {
        this.Name = Name;
        this.Level = 1;
        this.Experience = 0;    
        this.Health = 100;
        this.Materials = []
        this.Swords = [];
        this.Coins = 0;
        this.SwordsForBattles={Sword1: null, Sword2: null, Sword3: null};
        localStorage.setItem("me", JSON.stringify(this));
    }
    AddLevel() {
        this.Level++;
        localStorage.setItem("me", JSON.stringify(this));
    }
    AddExperience(amount) {
        this.Experience += amount;
        localStorage.setItem("me", JSON.stringify(this));
    }   
    AddHealth(amount) {
        this.Health += amount;
        localStorage.setItem("me", JSON.stringify(this));
    }
    AddSword(sword) {
        this.Swords.push(sword);
        localStorage.setItem("me", JSON.stringify(this));
    }
    RemoveExperience(amount) {
        this.Experience -= amount;
        if (this.Experience < 0) {
            this.Experience = 0;
        }
        localStorage.setItem("me", JSON.stringify(this));
    }
    RemoveHealth(amount) {
        this.Health -= amount;
        if (this.Health < 0) {
            this.Health = 0;
        }
        localStorage.setItem("me", JSON.stringify(this));
    }
    EquipSword(swordName, slot) {
        if (this.Swords.includes(swordName)) {
            this.SwordsForBattles[slot] = swordName;
            localStorage.setItem("me", JSON.stringify(this));
        } else {
            console.error(`Sword ${swordName} not found in user's swords.`);
        }
    }
    UnequipSword(slot) {
        if (this.SwordsForBattles[slot]) {
            this.SwordsForBattles[slot] = null;
            localStorage.setItem("me", JSON.stringify(this));
        } else {
            console.error(`No sword equipped in slot ${slot}.`);
        }
    }
    AddMaterial(material) {
        if (!this.Materials) {
            this.Materials = [];
        }
        this.Materials.push(material);
        localStorage.setItem("me", JSON.stringify(this));
    }
    RemoveMaterial(materialName) {
        if (this.Materials) {
            this.Materials = this.Materials.filter(material => material.name !== materialName);
            localStorage.setItem("me", JSON.stringify(this));
        } else {
            console.error(`No materials found for user ${this.Name}.`);
        }
    }
    RemoveSword(swordName) {
        this.Swords = this.Swords.filter(sword => sword.name !== swordName);
        localStorage.setItem("me", JSON.stringify(this));
    }
    RemoveCoins(amount) {
        if (this.Coins >= amount) {
            this.Coins -= amount;
            localStorage.setItem("me", JSON.stringify(this));
        } else {
            console.error(`Not enough coins. Current coins: ${this.Coins}, attempted to remove: ${amount}`);
        }
    }
    AddCoins(amount) {
        this.Coins += amount;
        localStorage.setItem("me", JSON.stringify(this));
    }
    getData() {
        return JSON.parse(localStorage.getItem("me"));
    }
    SetName(name) {
        this.Name = name;
        localStorage.setItem("me", JSON.stringify(this));
    }
}