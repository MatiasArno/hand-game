import {initWelcome} from "./pages/welcome"; 
import {initPlay} from "./pages/play"; 
import {initResult} from "./pages/result"; 
import {initCounter} from "./pages/counter"; 

const routes = [
    {
        path: /\/welcome/,
        handler: initWelcome
    },
    {
        path: /\/play/,
        handler: initPlay
    },
    {
        path: /\/counter/,
        handler: initCounter
    },
    {
        path: /\/result/,
        handler: initResult
    }
];

export function initRouter(container: HTMLElement) {

    function goTo(path: string) {

        history.pushState({}, "", path);
        handleRoute(path);
    }

    function handleRoute(route: string) {
    
        console.log(`handleRoute -->| ${route} |<--`);
    
        for(const r of routes) {
    
            if(r.path.test(route)) {
                r.handler(container, goTo);
            }
        }
    }

    location.pathname == "/" ? goTo("/welcome") : handleRoute(location.pathname);
    window.onpopstate = () => handleRoute(location.pathname);
}