package bladuels.models.items;

import bladuels.utils.GetImage;

public abstract class Item extends GetImage{
	private final String name;
	public Item(String name) {
		this.name = name;
	}
}
