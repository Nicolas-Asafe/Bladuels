import Battle from "./entitie.js"; 

const battle = new Battle(3, 60);

const timerEl = document.querySelector(".header p span"); 
const roundEl = document.querySelectorAll(".header p span")[1]; 
const player1LifeEl = document.querySelector(".health.red");
const player1EnergyEl = document.querySelector(".health.blue");

// Inicia a batalha
battle.startBattle = function () {
    this.startRound();
};

// Sobrescreve startRound para também atualizar a UI
battle.startRound = function () {
    this.TimerRound = 60;
    roundEl.textContent = `${3 - this.Rounds + 1}/3`;

    this.InitializeTimer(() => {
        let winner = this.checkRoundWinner();
        this.FinalizeRoundForPlayer(winner);

        if (this.Rounds > 0) {
            this.startRound();
        } else {
            alert(this.checkFinalWinner());
        }
    });
};

// Atualiza UI a cada segundo
battle.InitializeTimer = function (callback) {
    let interval = setInterval(() => {
        if (this.TimerRound > 0) {
            this.TimerRound--;
            timerEl.textContent = `${this.TimerRound}s`;

            // Atualiza vida/energia na tela
            player1LifeEl.textContent = `Life: ${this.Players.Player1.Life}/100`;
            player1EnergyEl.textContent = `Energy: ${this.Players.Player1.Energy}/100`;

            // Bot age de tempos em tempos
            if (this.TimerRound % 5 === 0) {
                this.botAction();
            }

        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 1000);
};

// Chama quando carregar a página
battle.startBattle();
