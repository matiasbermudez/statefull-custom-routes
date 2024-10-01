import { formCustomInit } from "../../components/form";

export function initForm(params: any){
  formCustomInit();
  const divEl = document.createElement('div');

  divEl.innerHTML = `
    <form-custom-el class="form-custom-el"></form-custom-el>
  `
  const formEl = divEl.querySelector('.form-custom-el');
  const formSubmit = formEl?.shadowRoot?.querySelector('.form__form')
  const botonVolver = formEl?.shadowRoot?.querySelector('.boton__volver')

  formSubmit?.addEventListener('submit', (e)=>{
    e.preventDefault()
    params.goTo('/welcome')
  })

  botonVolver?.addEventListener('click', ()=>{
    params.goTo('/welcome')
  })

  return divEl

}