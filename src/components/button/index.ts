export function initButtonEl(){
    
    class Button extends HTMLElement {

        shadow = this.attachShadow({mode: 'open'});

        constructor() {
            super();
        }

        connectedCallback() {
            this.render();
        }

        render() {
            const style = document.createElement("style");
            const btnType = this.getAttribute("type") as "1" | "2" | "3";

            style.innerHTML = `
                * {
                    box-sizing: border-box;
                }

                .button {
                    width: 324px;
                    height: 90px;
                    background-color: #006CFC;
                    color: white;
                    font-family: 'Odibee Sans', cursive;
                    font-size: 45px;
                    border: 10px solid #001997;
                    line-height: 49.86px;
                }
            `;

            this.shadow.innerHTML = `
                <button class="button">${btnType == "1" ? "Empezar" : btnType == "2" ? "Jugar" : "Volver a Jugar"}</button>
            `;

            this.shadow.appendChild(style);
        }
    }

    customElements.define('button-el', Button);
}