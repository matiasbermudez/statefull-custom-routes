export function footerInit(){
    class footerEl extends HTMLElement{
        constructor(){
            super();
            this.render();
        }
        render(){
            const shadow = this.attachShadow({mode : "open"})
            const style = document.createElement('style');

            style.innerText = `
                .footer{
                    background-color: #FFA0EA ;
                    height: 200px;
                    color: black;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 30px
                    }
            `

            shadow.innerHTML = `
                <footer class="footer">
                    <strong class="strong__footer">footer</strong>
                </footer>
            `
            shadow.appendChild(style)
        }
    }
    customElements.define('footer-custom-el', footerEl)
}