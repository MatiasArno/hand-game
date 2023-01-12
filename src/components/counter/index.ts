export function initCounterEl(){
    
    class Counter extends HTMLElement {

        shadow = this.attachShadow({mode: 'open'});

        constructor() {
            super();
        }

        connectedCallback() {
            this.render();
        }

        render() {
            const style = document.createElement("style");

            style.innerHTML = `
                * {
                    margin: 0;
                    box-sizing: border-box;
                    font-family: 'Zilla Slab', serif;
                }

                .number {
                    font-size: 216px;
                }
            `;

            this.shadow.innerHTML = `<p class="number">1</p>`;

            this.shadow.appendChild(style);
        }
    }

    customElements.define('counter-el', Counter);
}