export default class Creation {
    constructor(materials = []) {
        this.matchedSwords = [];

        materials.forEach(inputMaterial => {
            const [inputName, inputQty] = inputMaterial;

            serviceSwords.getSwords().forEach(sword => {
                const swordHasMaterial = sword.materials.some(
                    ([matName, matQty]) =>
                        matName === inputName && matQty === inputQty
                );

                if (swordHasMaterial) {
                    this.matchedSwords.push(sword);
                }
            });
        });
    }

    getMatches() {
        return this.matchedSwords;
    }
}
