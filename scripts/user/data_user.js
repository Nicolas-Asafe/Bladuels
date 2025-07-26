class SectionUserData {
    constructor(Name) {
        this.Name = Name;
        this.Level = 1;
        this.Experience = 0;
        this.Health = 100;
        this.Materials = [];
        this.Swords = [];
        this.Coins = 0;
        this.SwordsForBattles = { Sword1: null, Sword2: null, Sword3: null };
        this.Init = true;
    }

    static fromObject(obj) {
        const user = new SectionUserData(obj.Name);
        Object.assign(user, obj);
        return user;
    }

    toJSON() {
        return {
            Name: this.Name,
            Level: this.Level,
            Experience: this.Experience,
            Health: this.Health,
            Materials: this.Materials,
            Swords: this.Swords,
            Coins: this.Coins,
            SwordsForBattles: this.SwordsForBattles,
            Init: this.Init
        };
    }

    save() {
        localStorage.setItem("me", JSON.stringify(this.toJSON()));
    }

    setInit(state) {
        this.Init = state;
        this.save();
    }

    AddMaterial([name, qty]) {
        const i = this.Materials.findIndex(([mat]) => mat === name);
        if (i !== -1) {
            this.Materials[i][1] += qty;
        } else {
            this.Materials.push([name, qty]);
        }
        this.save();
    }

    RemoveMaterial(name) {
        const i = this.Materials.findIndex(([mat]) => mat === name);
        if (i !== -1) {
            this.Materials[i][1] > 1
                ? this.Materials[i][1]--
                : this.Materials.splice(i, 1);
            this.save();
        }
    }

    AddSword(sword) {
        this.Swords.push(sword);
        this.save();
    }

    RemoveSword(name) {
        this.Swords = this.Swords.filter(s => s.name !== name);
        this.save();
    }

    AddCoins(amount) {
        this.Coins += amount;
        this.save();
    }

    RemoveCoins(amount) {
        this.Coins >= amount
            ? this.Coins -= amount
            : console.error(`Coins insuficientes: precisa ${amount}`);
        this.save();
    }

    EquipSword(name, slot) {
        if (this.Swords.find(s => s.name === name)) {
            this.SwordsForBattles[slot] = name;
            this.save();
        }
    }

    UnequipSword(slot) {
        this.SwordsForBattles[slot] = null;
        this.save();
    }

    SetName(name) {
        this.Name = name;
        this.save();
    }
}

export default SectionUserData;
