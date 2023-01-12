export function initCounter(root: HTMLElement, goTo: any) {

    root.innerHTML = `
        <div class="counter-page">

            <div class="counter">
                <counter-el></counter-el>
            </div>

            <div class="hands">
                <hand-el type="scrissors"></hand-el>
                <hand-el type="rock"></hand-el>
                <hand-el type="paper"></hand-el>
            </div>            
        </div>
    `;

    // const startBtn = root.querySelector(".play-btn") as HTMLElement;
    // startBtn.addEventListener("click", () => goTo("/result"));
}