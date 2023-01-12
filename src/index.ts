import { initRouter } from "./routes";
import { initButtonEl } from "./components/button";
import { initTextEl } from "./components/text";
import { initHandEl } from "./components/hand";
import { initCounterEl } from "./components/counter";

function main() {

    const root = document.querySelector(".root") as HTMLElement;
    initRouter(root);
    initButtonEl();
    initTextEl();
    initHandEl();
    initCounterEl();
}

main();