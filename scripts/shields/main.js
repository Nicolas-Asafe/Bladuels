import Shields from "./shields_data.js";
import Shield from "./entitie.js";
const Shields_list = Shields()

function InitializeShields(){
    const NoobShield = new Shield({name:"NoobShield",level:0,life:2,price:10,protection:1.4,materials:[["Wood",10],["Iron",8]]})
    Shields_list.push(NoobShield)
}
InitializeShields()

export {InitializeShields,Shields_list}