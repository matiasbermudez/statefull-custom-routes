export function headerInit(){
    class headerEl extends HTMLElement{
        constructor(){
            super();
            this.render();
        }
        render(){
            const shadow = this.attachShadow({mode : "open"})
            const style = document.createElement('style');

            style.innerText = `
                .header{
                    background-color: #FF8282;
                    height: 100px;
                    color: black;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 30px
                    }
            `

            shadow.innerHTML = `
                <header class="header">
                    <strong class="strong__header">Header</strong>
                </header>
            `
            shadow.appendChild(style)
        }
    }
    customElements.define('header-custom-el', headerEl)
}