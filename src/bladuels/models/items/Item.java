package bladuels.models.items;

import bladuels.utils.GetImage;
import bladuels.enums.ItemType;

public abstract class Item extends GetImage{
	@SuppressWarnings("unused")
	private final String name;
	public final ItemType type;
	public Item(String name) {
		this.name = name;
		this.type = null;
	}
}
