import { state } from "../../state";

export function initGame(root: HTMLElement, goTo: any) {

    function renderGameResult(machine: number, user: number) {

        root.innerHTML = `
            <div class="play-page">
                <hand-el class="hand" type="${machine == 1 ? 'rock' : machine == 2 ? 'paper' : 'scissors'}"></hand-el>
                <hand-el class="hand" type="${user == 1 ? 'rock' : user == 2 ? 'paper' : 'scissors'}"></hand-el>
            </div>
        `;

        setTimeout(() => goTo("/result"), 3000);
    }

    state.subscribe(() => renderGameResult(state.currentPlay.machine, state.currentPlay.user));
}