export function initResultEl(){
    
    class Result extends HTMLElement {

        shadow = this.attachShadow({mode: 'open'});

        constructor() {
            super();
        }

        connectedCallback() {
            this.render();
        }

        render() {
            const style = document.createElement("style");

            style.innerHTML = ``;

            this.shadow.innerHTML = ``;

            this.shadow.appendChild(style);
        }
    }

    customElements.define('result-el', Result);
}