//Este archivo .JS, se va a a encargar de  la logica del mapa

const WIDTH = 400; //Vamoa a crear mediante una constante, el ancho de la imagen
const HEIGH = 400;//Vamoa a crear mediante una constante, el alto de la imagen

let target = { //Abrimos llave /*Vamos a generar el mapa del tesoro, para saber donde va a  estar */
  x: getRandomNumber(WIDTH), /*Va a tener un parametro X, y con getRandomNumber(WIDTH) 
                              va a obtener un numero aleatorio desde todo el ancho de la imagen*/

  y: getRandomNumber(HEIGH) /*Va tener un parametro Y, y con getRandomNumber(WIDTH) 
                              va a obtener un numero aleatorio desde todo el largo de la imagen*/
}; //Cerramos llave

let $map = document.querySelector('#map');/*Vamos a traernos a la imagen de nuestro HTML. con el nombre de la varible let $map
                                          sera igual a document.querySelecctor "mapa", realizando esto vamos a decir que vamos a 
                                          obtener el mapa del id del HTMl, entonces ya vamos a tener el mapa en el nombre de la variable*/
let $distance = document.querySelector('#distance'); /*Vamos a obtener la distancia a la pista.
                                                      Vamos aguardar en una varible llamado $distance y le vamosa dar la referencia de documento
                                                      a la etiqueta html llamada "distance" */
let clicks = 0; /* Vamos a colocar un variable para saber en cuantos clics, encontramos el tesoro, va acomenzar en cero*/

$map.addEventListener('click', function (e) { /*Abrimos llave*/ /*Si yo quiero obtener cuando el usuario da un clic, entonces coloco.
                                                El elemento mapa "$mapa", le voy a agregar un escuchador al evento"addEventListener"
                                                y le vamos a dar un escucha al evento "click", es decir, cuando el usuario haga clik,
                                                yo voy a hacer algo, y voya a ejecutar una funcion del evento "e" */

  console.log('click'); /*Aqui voy a imprimir si el clic esta funcionandomcon la imagen de mi juego */

  clicks++;/* Vamos a colocar un variable para saber en cuantos clics, encontramos el tesoro, va a ir aumentando*/

  let distance = getDistance(e, target); /*Vamos a colocarle la distancia, y para ello voy a utilizar la funcion "getDistance" la funcion 
                                            que hace uso  del teorema de pitagoras, y esa recibe dos parametros. 1: El evento del clic
                                            2: ubicacion del mapa del tesoro de nuestro juego*, osea la distancia*/

  let distanceHint = getDistanceHint(distance);/*Esta funcion que ocupare es: getDistanceHint, fue para tener los diferentes tipos de distancias.
                                                Coloco la varibale let para que me devuelva un string, junto con distanceHint, y con la funcion ya 
                                                mencionada "getDistanceHint" y vamos a pasarle la distancia que ya estamos obteniendo de la otra funcion, 
                                                con el fin de devolverme la distancia y si estoy fria, caliente del tesoro.*/

  $distance.innerHTML = `<h1>${distanceHint}</h1>`;/*Tiene referencia con la linea33. Esa etiqueta distance  en su HTML vamos a colocarle 
                                                    el string que nos esta devolviendo, y asi no va devolviendo la pista, le colocamos h1, para que se
                                                    vea esteticamnete bien */

/*Aqui vamos a decir si la distancia esta realmente cerca para que gane, lo haremos con un if  */
  if (distance < 20 ) { /*Si la distancia, es menor a 20 esta bastnate cerca*/

    alert(`Found the treasure in ${clicks} clicks!`);/*Vamos a mandar un alerta y decirle ,has encontrado el tesoro en, 
                                                       y colocamos la cantidad de clics,   */

    location.reload();/* Esto sirve para refresacar la pagina en JavaScrip*/
  } /*Cerramos llave  */
}); /*Ceramos llave */
