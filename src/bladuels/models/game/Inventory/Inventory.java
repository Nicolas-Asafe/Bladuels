package bladuels.models.game.Inventory;

import bladuels.exceptions.ItemNotFound;
import bladuels.exceptions.YouCantDoThis;
import bladuels.models.game.Inventory.Slot;
import java.util.List;
import java.util.ArrayList;
import bladuels.models.items.Item;

public class Inventory {
	private List<Slot> slots;
	public Inventory(int sizeContent) {
		initInventory(sizeContent);
	}
	public List<Slot> getSlots(){
		return this.slots;
	}
	public void initInventory(int sizeContent) {
		this.slots = new ArrayList<>(sizeContent);
		for(int i=0;i<sizeContent;i++) {
			this.slots.add(new Slot(null, 0, i));
		}
	}
	public void addItem(Item item,int quantityOfItem){
		for (Slot s : this.slots) {
			try {s.addItem(item,quantityOfItem);}
			catch(YouCantDoThis error) {
				System.out.println(error.getMessage());
			}
		}
		throw new YouCantDoThis("All slots are taken");
    }
	public Slot getSlot(int slotId) {
		Slot slot = this.slots.get(slotId);
		if(slot != null) throw new ItemNotFound("Slot not found: "+ slotId);
		return slot;
	}
}
