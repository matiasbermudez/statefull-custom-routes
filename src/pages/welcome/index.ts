import { welcomeCustomInit } from "../../components/welcome"
export function initWelcome(params: any) {
    welcomeCustomInit();



    const divEl = document.createElement('div')
    divEl.classList.add('welcome__contenedor')
    divEl.innerHTML = `
        <welcome-custom-el class="welcome-custom-el" ></welcome-custom-el>
    `
    const formEvento = divEl.querySelector('.welcome-custom-el');
    const form = formEvento?.shadowRoot?.querySelector('.welcome__form')

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        params.goTo("/form")
    })
    return divEl;

}