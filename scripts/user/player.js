import SectionUserData from "./data_user.js";


let cachedPlayer = null;

export default function Player(name = "Undefined User") {
    if (!cachedPlayer) {
        const saved = localStorage.getItem("me");
        cachedPlayer = saved
            ? SectionUserData.fromObject(JSON.parse(saved))
            : new SectionUserData(name);
    }
    return cachedPlayer;
}
