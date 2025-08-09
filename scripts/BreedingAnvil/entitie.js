import Shields from '../shields/shields_data.js';
import { serviceSwords } from '../swords/main.js';

export class CreationSword {
    constructor(userMaterials = []) {
        // Aceita array de pares ou objeto simples {Wood: 10, Iron: 5}
        if (!Array.isArray(userMaterials)) {
            userMaterials = Object.entries(userMaterials);
        }
        this.userMaterials = new Map(userMaterials);
        this.matchedSwords = this.findCraftableSwords();
    }

    findCraftableSwords() {
        const allSwords = serviceSwords.getSwords();
        const craftable = [];

        for (const sword of allSwords) {
            const canCraft = sword.materials.every(([matName, matQty]) => {
                const availableQty = this.userMaterials.get(matName) || 0;
                return availableQty >= matQty;
            });

            if (canCraft) {
                craftable.push(sword);
            }
        }

        return craftable;
    }

    getMatches() {
        return this.matchedSwords;
    }
}


export class CreationShields {
    constructor(userMaterials = []) {
        // Aceita array de pares ou objeto simples {Wood: 10, Iron: 5}
        if (!Array.isArray(userMaterials)) {
            userMaterials = Object.entries(userMaterials);
        }
        this.userMaterials = new Map(userMaterials);
        this.matchedShields = this.findCraftableShields();
    }

    findCraftableShields() {
        // Se Shields for função, chama. Se for array, usa direto.
        const allShields = typeof Shields === 'function' ? Shields() : Shields;
        const craftable = [];

        for (const shield of allShields) {
            const canCraft = shield.materials.every(([matName, matQty]) => {
                const availableQty = this.userMaterials.get(matName) || 0;
                return availableQty >= matQty;
            });

            if (canCraft) {
                craftable.push(shield);
            }
        }

        return craftable;
    }

    getMatches() {
        return this.matchedShields;
    }
}
