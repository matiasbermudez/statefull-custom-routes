import { initForm } from "./pages/form";
import { initWelcome } from "./pages/welcome";

const routes = [
    {
        path: /\/welcome/,
        component: initWelcome
    },
    {
        path: /\/form/,
        component: initForm
    }
]

export function initRouter(container: Element){

        function goTo(path: any){
            history.pushState({}, "", path);
            handlerRoute(path)
        }

        function handlerRoute(route:any){
            console.log("Ruta enviada: ", route)

            for (const r of routes){
                if(r.path.test(route)){
                    const el = r.component({goTo: goTo});

                    if(container.firstChild){
                        container.firstChild.remove()
                    }

                    container.append(el)

                }
            }
        }
        if (location.pathname == "/") {
            goTo('/welcome')
        } else {
            handlerRoute(location.pathname)
        }
}