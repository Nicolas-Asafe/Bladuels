import Creation from './entitie.js';
import currentUser from '../script_pages/CreateAccount.js';

function SwordsForCreate() {
    const materials = currentUser.Materials;
    const forge = new Creation(materials);
    return forge.getMatches();
}

export default SwordsForCreate;
