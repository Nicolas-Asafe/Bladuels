package bladuels.models.items;

import bladuels.enums.ItemType;
import bladuels.exceptions.ValueInvalidException;

public class Sword extends Item{
	private double damage;
	private int level;
	private double energy;
	private double health;
	private final Material[] materials;
	public final ItemType type = ItemType.sword;
	
	public Sword(String name, double damage, int level,double energy, double health,Material[] materials) {
		super(name);
		this.damage = damage;
		this.level = level;
		this.energy = energy;
		this.health = health;
		this.materials = materials;
	}
	public Sword GetAll() {
		return this;
	}
	public Material[] GetMaterials() {
		return this.materials;
	}
	public void ReciveDamage(double damage,double damageDebuff) {
		if(damage<=0) throw new ValueInvalidException("Damage value is invalid");
		this.health-=damage-damageDebuff;
	}
	public double[] CauseHarm(double damageBuff,int levelDamage) {
		if(levelDamage<=0) throw new ValueInvalidException("LevelDamage value is invalid");
		double damageForCause = this.damage+damageBuff*levelDamage;
		double energyForRemove = this.energy;
		return new double[]{damageForCause,energyForRemove};
	}
	
	public void UpLevel(int XPs) {
		this.damage+=XPs/this.damage;
		this.level+=XPs/this.level;
		this.energy+=XPs/this.energy;
		this.health+=XPs/this.health;
	}
}
