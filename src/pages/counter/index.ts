import { state } from "../../state";

export function initCounter(root: HTMLElement, goTo: any) {

    root.innerHTML = `
        <div class="counter-page">

            <div class="counter">
            </div>

            <div class="counter-hands">
                <hand-el class="counter-hand" type="scissors"></hand-el>
                <hand-el class="counter-hand" type="rock"></hand-el>
                <hand-el class="counter-hand" type="paper"></hand-el>
            </div>            
        </div>
    `;

    const counterEl = root.querySelector(".counter") as HTMLElement;
    const handEls = root.querySelectorAll(".counter-hand") as any;
    let interval: any;

    (function changeCounter(n: number) {

        let count = n;

        counterEl.innerHTML = `<counter-el>${count}</counter-el>`;

        interval = setInterval(() => {
            count--;
            counterEl.innerHTML = `<counter-el>${count}</counter-el>`;

            if(count < 1) {
                clearInterval(interval);
                goTo("/play");
            }
        }, 1000);
    })(3);

    function game(user: number) {
        const machine = Math.round((Math.random() * 2) + 1);
        if(machine == user) {
            console.log(`Máquina ${machine} | Usuario ${user}`);
            state.updateScore("draw", machine, user);
        } else if(machine == 1 && user == 2 || machine == 2 && user == 3 || machine == 3 && user == 1) {
            console.log(`Máquina ${machine} | Usuario ${user}`);
            state.updateScore("user-wins", machine, user);
        } else {
            console.log(`Máquina ${machine} | Usuario ${user}`);
            state.updateScore("machine-wins", machine, user);
        }

        clearInterval(interval);
        goTo("/game");
    }

    handEls.forEach((hand: any) => {
        hand.addEventListener("click", () => {
            const handAtt = hand.getAttribute("type") as string;
            handAtt == "rock" ? game(1) : handAtt == "paper" ? game(2) : game(3);
        });
    });
}