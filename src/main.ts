import { footerInit } from './components/footer';
import { headerInit } from './components/header';
import './style.css'
import { initRouter } from './routes';
import { state } from './state';



(function main(){
 
  const root = document.querySelector('#root');

  state.setState({nombre: "matias"})
  initRouter(root)
  
  headerInit();
  footerInit();

 
})();