import { CreationShields, CreationSword } from './entitie.js';
import currentUser from '../script_pages/CreateAccount.js';

function SwordsForCreate() {
    const materials = currentUser.Materials;
    const forge = new CreationSword(materials);
    return forge.getMatches();
}
function ShieldsForCreate(){
    const materials = currentUser.Materials;
    const forge = new CreationShields(materials);
    return forge.getMatches();
}

export {SwordsForCreate,ShieldsForCreate}
