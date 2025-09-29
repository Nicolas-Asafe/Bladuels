package bladuels.models.game.Inventory;

import bladuels.exceptions.YouCantDoThis;
import bladuels.models.items.Item;

public class Slot {
	private boolean slotIsVoid = true;
	private Item item;
	private int slotIndex;
	private int quantityOfItem;
	public Slot(Item item,int quantityOfItem,int slotIndex) {
		this.slotIndex = slotIndex;
		this.quantityOfItem = quantityOfItem;
	}
	
	public Item getItem() {
		return this.item;
	}
	public boolean slotIsVoid() {
		return this.slotIsVoid;
	}
	public int getSlotIndex() {
		return this.slotIndex;
	}
	public int quantityOfItem() {
		return this.quantityOfItem;
	}
	
	public void addItem(Item newItem,int quantityOfItem) {
		if(!slotIsVoid) throw new YouCantDoThis("This slot is already filled");
		if(this.item.equals(newItem)) {
			this.quantityOfItem+=quantityOfItem;
		}
		this.item = newItem;
		this.quantityOfItem = quantityOfItem;
		this.slotIsVoid = false;
	}
}
