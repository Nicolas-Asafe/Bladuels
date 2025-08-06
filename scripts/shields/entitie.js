import { Select_URL_of_Shield } from "../image_scripts/main.js"
export default class Shield{
    constructor(ShieldParams={name,life,protection,level,price,materials:[]}){
        this.name = ShieldParams.name
        this.life = ShieldParams.life
        this.image_url = Select_URL_of_Shield(this.name)
        this.protection = ShieldParams.protection
        this.materials = ShieldParams.materials
        this.level = ShieldParams.level
        this.price = ShieldParams.price   
        return this
    }
    AddLevel(level){
        this.level = level;
        this.life = this.level * 0.3;
        this.protection = this.protection * 0.3
        this.price = this.level * 2;
        return this
    }
    RemoveLife(amount){
        this.life -= amount
    }
    GetData() {
    return {
        name: this.name,
        damage: this.damage,
        price: this.price,
        level: this.level,
        life: this.life,
        image_url: this.image_url,
        gif_url: this.gif_url,
        isEquiped: this.isEquiped,
        materials: this.materials
    }
}
}