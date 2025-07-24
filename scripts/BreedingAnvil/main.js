import { serviceSwords } from '../swords/main.js';
import Creation from './entitie.js';
import User from '../script_pages/CreateAccount.js'

function SwordsForCreate(){
    const materials = User().getData().Materials
    const SwordsForCreate = new Creation(materials)
    return SwordsForCreate.getMatches()
}

export default SwordsForCreate