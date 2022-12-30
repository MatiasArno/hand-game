import {initWelcome} from "./pages/welcome"; 
import {initPlay} from "./pages/play"; 
import {initResult} from "./pages/result"; 

const routes = [
    {
        path: /\/welcome/,
        component: initWelcome
    },
    {
        path: /\/play/,
        component: initPlay
    },
    {
        path: /\/result/,
        component: initResult
    }
];

export function initRouter(container: HTMLElement) {

    function goTo(path: string) {

        history.pushState({}, "", path);
        handleRoute(path);
    }

    function handleRoute(route: string) {
    
        console.log(`handleRoute -->| ${route} |<--`);
        console.log(`Ruta actual -->| ${location.pathname} |<--`);
    
        for(const r of routes) {
    
            if(r.path.test(route)) {

                const el = r.component({goTo: goTo});
    
                if(container.firstChild) {
                    container.firstChild.remove();
                }
    
                container.appendChild(el);
            }
        }
    }

    location.pathname == "/" ? goTo("/welcome") : handleRoute(location.pathname);
    window.onpopstate = () => handleRoute(location.pathname);
}