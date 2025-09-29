package bladuels.models.game;

import bladuels.exceptions.ValueInvalidException;
import bladuels.models.items.*;
import bladuels.models.game.Inventory.*;

public class Player {
	private final String name;
	private double hearth;
	public Inventory inventory;
	
	public Player(String name,double hearth,int sizeContent) {
		this.name = name;
		this.hearth = hearth;
		this.inventory = new Inventory(sizeContent);
	}
	
	public void ReciveDamage(double damage) {
		if(damage<=0) throw new ValueInvalidException("Damage value is invalid");
		this.hearth-=damage;
	}	
}
