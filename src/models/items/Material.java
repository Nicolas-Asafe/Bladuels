package models.items;

import enums.ItemType;
import enums.Rarity;
import utils.GetImage;

public class Material extends Item {
    private final Rarity rarity;
    private final int quantity;
    public final ItemType type = ItemType.material;

    public Material(String name, Rarity rarity,int quantity) {
    	super(name);
        this.rarity = rarity;
        this.quantity = quantity;
    }
    public int GetQuantityOfThisMaterial() {
    	return this.quantity;
    }
    public Material GetAll() {
        return this;
    }
}
