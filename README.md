Lo hice de nuevo por que la primera vez no lo hice con custom elements sino con las pages directamente y la idea no era esa .
Para este desafío, te proponemos que recrees el wizard (formulario de pasos) de este diseño y uses un state manager, tal y cómo vimos en la demo, para compartir el dato del paso 1 en el paso 2.

Además, tenés que utilizar el mismo mecanismo de router y la estructura de pages/componentes que venimos usando. El /welcome debe alterar el state desde el form y /form debe leer y suscribirse a los subsiguientes cambios del state.
Ambas rutas deben usar custom elements, que serán los que deben interactuar con el state y no las pages.
