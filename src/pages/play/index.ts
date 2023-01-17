export function initPlay(root: HTMLElement, goTo: any) {

    root.innerHTML = `
        <div class="play-page">
            <text-el type="2" class="instructions">Presioná jugar y elegí: piedra, papel ó tijera antes de que pasen los tres segundos.</text-el>

            <button-el type="2" class="play-btn"></button-el>

            <div class="play-hands">
                <hand-el type="scrissors"></hand-el>
                <hand-el type="rock"></hand-el>
                <hand-el type="paper"></hand-el>
            </div>
        </div>
    `;

    const startBtn = root.querySelector(".play-btn") as HTMLElement;
    startBtn.addEventListener("click", () => goTo("/counter"));
}