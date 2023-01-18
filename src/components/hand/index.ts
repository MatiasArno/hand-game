export function initHandEl(){
    
    class Hand extends HTMLElement {

        shadow = this.attachShadow({mode: 'open'});

        constructor() {
            super();
        }

        connectedCallback() {
            this.render();
        }

        render() {
            const style = document.createElement("style");
            const type = this.getAttribute("type") as "rock" | "paper" | "scissors";
            const rockURL = require("../../media/rock.svg");
            const paperURL = require("../../media/paper.svg");
            const scissorsURL = require("../../media/scissors.svg");

            style.innerHTML = `
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .hand {
                    height: 100%;
                }
            `;

            this.shadow.innerHTML = `${type == "rock" ? `<img class="hand" src="${rockURL}">` : type == "paper" ? `<img class="hand" src="${paperURL}">` : `<img class="hand" src="${scissorsURL}">`}`;

            this.shadow.appendChild(style);
        }
    }

    customElements.define('hand-el', Hand);
}