package bladuels.models.items;

import bladuels.enums.ItemType;

import bladuels.enums.Rarity;


public class Material extends Item {
    private final Rarity rarity;
    private final int quantity;
    public final ItemType type = ItemType.material;

    public Material(String name, Rarity rarity,int quantity) {
    	super(name);
        this.rarity = rarity;
        this.quantity = quantity;
    }
    public Rarity getRarity() {
    	return this.rarity;
    }
    public int getQuantityOfThisMaterial() {
    	return this.quantity;
    }
    public Material getAll() {
        return this;
    }
}
