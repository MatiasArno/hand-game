import { state } from "../../state";

export function initGame(root: HTMLElement, goTo: any) {

    root.innerHTML = `
            <div class="game-page">
                <div class="machine-hand">
                    <hand-el type="${state.currentPlay.machine == 1 ? 'rock' : state.currentPlay.machine == 2 ? 'paper' : 'scissors'}"></hand-el>                
                </div>
                <div class="user-hand">
                    <hand-el type="${state.currentPlay.user == 1 ? 'rock' : state.currentPlay.user == 2 ? 'paper' : 'scissors'}"></hand-el>
                </div>
            </div>
        `;

    setTimeout(() => goTo("/result"), 3000);

    // function renderGameResult(machine: number, user: number) {

    //     root.innerHTML = `
    //         <div class="game-page">
    //             <div class="machine-hand">
    //                 <hand-el type="${machine == 1 ? 'rock' : machine == 2 ? 'paper' : 'scissors'}"></hand-el>                
    //             </div>
    //             <div class="user-hand">
    //                 <hand-el type="${user == 1 ? 'rock' : user == 2 ? 'paper' : 'scissors'}"></hand-el>
    //             </div>
    //         </div>
    //     `;

    //     setTimeout(() => goTo("/result"), 3000);
    // }

    // state.subscribe(() => renderGameResult(state.currentPlay.machine, state.currentPlay.user));
}