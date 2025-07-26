import Player from "../user/player.js";

const currentUser = Player();

function registerUser(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    if (username) {
        currentUser.SetName(username);
        alert("Conta criada com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("Digite um nome.");
    }
}

document.querySelector(".RegisterForm")?.addEventListener("submit", registerUser);

export default currentUser;
