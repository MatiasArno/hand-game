import {initWelcome} from "./pages/welcome"; 
import {initPlay} from "./pages/play"; 
import {initCounter} from "./pages/counter"; 
import {initGame} from "./pages/game";
import {initResult} from "./pages/result"; 

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
        path: /\/game/,
        handler: initGame
    },
    {
        path: /\/result/,
        handler: initResult
    }
];

const BASE_PATH = "/hand-game";

function isGithubPages() {
    return location.host.includes('github.io');
}

export function initRouter(container: HTMLElement) {

    function goTo(path: string) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }

    function handleRoute(route: string) {
    
        console.log(`handleRoute -->| ${route} |<--`);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    
        for(const r of routes) {
    
            if(r.path.test(newRoute)) {
                r.handler(container, goTo);
            }
        }
    }

    const CURRENT_PATH = isGithubPages() ? BASE_PATH + "/" : "/"
    location.pathname == CURRENT_PATH ? goTo("/welcome") : handleRoute(location.pathname);
    window.onpopstate = () => handleRoute(location.pathname);
}