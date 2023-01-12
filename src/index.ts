import { initWelcome } from "./pages/welcome";
import { initButtonEl } from "./components/button";
import { initTextEl } from "./components/text";
import { initHandEl } from "./components/hand";

function main() {

    const root = document.querySelector(".root") as HTMLElement;
    initWelcome(root);
    initButtonEl();
    initTextEl();
    initHandEl();
}

main();