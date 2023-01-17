import { state } from "../../state";

export function initWelcome(root: HTMLElement, goTo: any) {

    state.init();

    root.innerHTML = `
        <div class="welcome-page">
            <text-el type="1" class="title">Piedra Papel <span class="transparent-character">ó</span> Tijera</text-el>

            <button-el type="1" class="start-btn"></button-el>

            <div class="hands">
                <hand-el type="scrissors"></hand-el>
                <hand-el type="rock"></hand-el>
                <hand-el type="paper"></hand-el>
            </div>
        </div>
    `;

    const startBtn = root.querySelector(".start-btn") as HTMLElement;
    startBtn.addEventListener("click", () => goTo("/play"));
}