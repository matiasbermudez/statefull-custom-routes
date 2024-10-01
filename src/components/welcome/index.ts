import { state } from "../../state";

export function welcomeCustomInit(){
    class Welcome extends HTMLElement{
        shadow = this.attachShadow({mode : "open"})
        constructor(){
            super();
            state.subscribe(()=>{
                this.syncWithState();
                this.render()
            })
            this.render()
        }
        syncWithState(){
            const lastState = state.getState();
            this.render()
        }
        render(){
            this.shadow.innerHTML =`
            <div class="welcome__contenedor">
                 <h1 class="welcome__titulo"> Te damos la bienvenida a esta página ${state.data.nombre}</h1>
                 <strong>Para continuar ingresá tu nombre</strong>

                <form action="#" class="welcome__form">
                    <label id="nombre" class="welcome__label">Nombre</label>
                    <input type="text" name="nombre" id="nombre" class="welcome__input" required>
                    <button type="submit" class="welcome__boton">Comenzar</button>
                </form>
            </div>
            `
            const style = document.createElement('style');
            style.innerText = `
                    .welcome__contenedor{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .welcome__titulo{
                        text-align: center;
                        font-size: 45px;
                        margin: 40px 0 40px 0;
                        font-weight: bold;
                    }
                    .welcome__form{
                        display: flex;
                        flex-direction: column;
                        width: 80%;
                        margin-top: 40px;
                    }
                    .welcome__input{
                        height: 40px;
                        border-radius: 6px;
                        background-color: white;
                        color: black;
                        font-size: 20px;
                        padding-left: 10px;
                    }
                    .welcome__boton{
                        margin: 10px 0 100px 0;
                        height: 40px;
                        background-color: #9CBBE9 ;
                        color: black;
                        font-size: 16px;
                        font-weight: bold;
                        border-radius: 4px;

                    }
            `
            const formEl = this.shadow.querySelector('.welcome__form');
            formEl?.addEventListener('submit', (e)=>{
                e.preventDefault();
                const datoDelEvento = e.target?.nombre.value;
                state.setState(
                    {
                        ...state.getState(),
                        nombre: datoDelEvento
                    }
                )
            })
            console.log(state.getState())
            this.shadow.appendChild(style)
        }
    }

    if (!customElements.get('welcome-custom-el')) {
        customElements.define('welcome-custom-el', Welcome);
      }
}