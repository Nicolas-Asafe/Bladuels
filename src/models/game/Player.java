package models.game;

import exceptions.ValueInvalidException;
import models.items.*;

public class Player {
	private final String name;
	private double hearth;
	private Material[] materials;
	private Sword[] swords;
	
	public Player(String name,double hearth) {
		this.name = name;
		this.hearth = hearth;
	}
	
	public void ReciveDamage(double damage) {
		if(damage<=0) throw new ValueInvalidException("Damage value is invalid");
		this.hearth-=damage;
		
	}
}
