import { state } from "../../state";

export function initResult(root: HTMLElement, goTo: any) {

    const currentMatch = state.currentPlay.match;
    const currentState = state.getState();

    root.innerHTML = `
        <div class="result result-${currentMatch}">
            <h1 class="result-title result-title-${currentMatch}">${currentMatch == "draw" ? "Empate" : currentMatch == "user-wins" ? "Ganaste" : "Perdiste"}</h1>

            <div class="score">
                <h2 class="score-title">Score</h2>
                <p class="score-text">Vos: ${currentState.user}</p>
                <p class="score-text">Máquina: ${currentState.machine}</p>
            </div>

            <button-el type="3" class="playagain-btn"></button-el>
        </div>
    `;

    const playAgainBtnEl = root.querySelector(".playagain-btn") as HTMLElement;
    playAgainBtnEl.addEventListener("click", () => {
        goTo("/play");
    });
}