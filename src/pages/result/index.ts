import { state } from "../../state";

export function initResult(root: HTMLElement, goTo: any) {

    const currentMatch = state.currentPlay.match;
    const currentState = state.getState();
    console.log("CURRENT STATE DE RESULT", currentState);

    root.innerHTML = `
        <div class="result">
            <h1>${currentMatch == "draw" ? "Empate" : currentMatch == "user-wins" ? "Ganaste" : "Perdiste"}</h1>

            <div class="score">
                <h2>Score</h2>
                <p>Vos: ${currentState.user}</p>
                <p>Máquina: ${currentState.machine}</p>
            </div>

            <button-el type="3" class="playagain-btn"></button-el>
        </div>
    `;

    const playAgainBtnEl = root.querySelector(".playagain-btn") as HTMLElement;
    playAgainBtnEl.addEventListener("click", () => {
        goTo("/play");
    });
}