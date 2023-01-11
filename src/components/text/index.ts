export function initTextEl(){
    
    class Text extends HTMLElement {

        shadow = this.attachShadow({mode: 'open'});

        constructor() {
            super();
        }

        connectedCallback() {
            this.render();
        }

        render() {
            const style = document.createElement("style");
            const type = this.getAttribute("type") as "1" | "2";
            const content = this.textContent as string;

            style.innerHTML = `
                * {
                    font-family: 'Zilla Slab', serif;
                }

                .title {
                    color: #009048;
                    font-size: 80px;
                    font-weight: 700;
                }

                .instructions {
                    font-size: 40px;
                    font-weight: 700;
                }
            `;

            this.shadow.innerHTML = `
                ${type == "1" ? `<h1 class="title">${content}</h1>` : `<p class="instructions">${content}</p>`}
            `;

            this.shadow.appendChild(style);
        }
    }

    customElements.define('text-el', Text);
}