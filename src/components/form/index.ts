import { state } from "../../state";

export function formCustomInit(){
    class Form extends HTMLElement{
        shadow = this.attachShadow({mode : "open"})
        constructor(){
            super()
            state.subscribe(()=>{
                state.getState();
                this.syncWithState();
            })
            this.render()
        }
        syncWithState(){
            const lastState = state.getState();
            this.render()
        }
        render(){
            const style = document.createElement('style');
            style.innerText = `
                        .form__contenedor{
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                        }
                        .form__titulo{
                            text-align: center;
                            font-size: 45px;
                            margin: 40px 0 40px 0;
                            font-weight: bold;
                        }
                        .form__form{
                            width: 80%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;

                        }
                        .form__label{
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            margin-top: 20px;
                            input{
                                height: 45px;
                                background-color: white;
                                color: black;
                                padding-left: 10px;
                                font-size: 15px;
                                font-weight: bold;
                            }
                        }
                        .form__select{
                            width: 100%;
                            height: 45px;
                            margin: 35px;
                            background-color: white;
                            color: black;
                            padding-left: 10px;
                            font-size: 15px;
                            font-weight: bold;
                        }

                        .boton__enviar{
                            width: 100%;
                            height: 45px;
                        }
                        .boton__volver{
                            width: 80%;
                            height: 45px;
                            margin: 30px;
                        }
                        .boton{
                            background-color: #9CBBE9 ;
                            color: black;
                            font-size: 16px;
                            font-weight: bold;
                            border-radius: 4px;
                        }
            `

            this.shadow.innerHTML = `
                  <div class="form__contenedor">
                  <h1 class="form__titulo">Hola ${state.data.nombre}</h1>
                  <strong class="form__strong"> Necesitamos algunos datos más </strong>

                  <form action="#" class="form__form">
                    <label for="" id="email" class="form__label">
                      Email
                      <input type="text" name="email" id="email" required>
                    </label>
                    <label for="" id="comida" class="form__label">
                      Comida favorita
                      <input type="text" name="comida" id="comida" required>
                    </label>
                    <select name="juego" id="juego" class="form__select">
                      <option value="piedra">Piedra</option>
                      <option value="papel">Papel</option>
                      <option value="tijera">Tijera</option>
                    </select>
                    <button  type="submit" class="boton__enviar boton">Enviar</button>
                  </form>
                  <button class="boton__volver boton">Volver</button>  
                </div>

            `
            const formEl = this.shadow.querySelector('.form__form');
            formEl?.addEventListener('submit', (e) =>{
                e.preventDefault()
                const eventoTarget = e.target
                const lastState = state.getState()
                state.setState({
                    ...lastState,
                    email : eventoTarget.email.value,
                    comida : eventoTarget.comida.value,
                    juego : eventoTarget.juego.value,
                })
            })
            this.shadow.appendChild(style)
        }
    }
    if (!customElements.get('form-custom-el')) {
        customElements.define('form-custom-el', Form);
      }
}