import { serviceSwords } from '../swords/main.js';

export default class Creation {
    constructor(userMaterials = []) {
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
