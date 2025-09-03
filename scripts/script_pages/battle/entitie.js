import { MaterialsService } from "./materials/main.js";

export default class Battle {
    constructor(Rounds = 3, TimerRound = 60, Players = { Player1: {}, Player2: {} }) {
        this.Rounds = Rounds;
        this.TimerRound = TimerRound;
        this.Players = Players;
    }

    InitializeTimer(callback) {
        let interval = setInterval(() => {
            if (this.TimerRound > 0) {
                this.TimerRound--;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 1000);
    }

    AddPlayers(Players = {
        Player1: {
            Points: 0,
            Swords: { Sword1: null, Sword2: null, Sword3: null },
            Life: 100,
            Energy: 100,
            Gift: []
        },
        Player2: {
            Points: 0,
            Swords: { Sword1: null, Sword2: null, Sword3: null },
            Life: 100,
            Energy: 100,
            Gift: []
        }
    }) {
        this.Players = Players;
    }

    FinalizeRoundForPlayer(PlayerNumber = 2) {
        if (this.Rounds > 0) {
            this.Rounds--;
            this.Players[`Player${PlayerNumber}`].Points++;
            return `Rodada finalizada para Player${PlayerNumber}`;
        }

        if (this.Players.Player1.Points > this.Players.Player2.Points) {
            return "Game Over - Player1 venceu!";
        } else if (this.Players.Player2.Points > this.Players.Player1.Points) {
            return "Game Over - Player2 venceu!";
        } else {
            return "Empate!";
        }
    }

    GiveGiftToPlayer(PlayerNumber) {
        for (let g = 0; g < 3; g++) {
            const materials = MaterialsService.getMaterials();
            const gift = materials[Math.floor(Math.random() * materials.length)];
            this.Players[`Player${PlayerNumber}`].Gift.push(gift);
        }
    }
}
