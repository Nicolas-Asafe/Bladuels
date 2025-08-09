import Shields from "./shields_data.js";
import Shield from "./entitie.js";

function InitializeShields() {
    const NoobShield = new Shield({ name: "NoobShield", level: 0, life: 2, price: 3, protection: 1.4, materials: [["Wood", 10], ["Iron", 8]] })
    const IronShield = new Shield({ name: "IronShield", level: 0, life: 5, price: 9, protection: 3, materials: [["Iron", 19]] })
    const GoldenShield = new Shield({name: "GoldenShield",level: 1,life: 10,price: 25,protection: 6,materials: [["Gold", 15], ["Iron", 10]]})
    Shields().push(NoobShield, IronShield,GoldenShield)
}
InitializeShields()
const Shields_list = Shields()


export { InitializeShields, Shields_list }