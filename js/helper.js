
//Este archivo me va a ayudar a escribir todas las funciones que voy a poder utilizar a lo largo de mi programa 

let getRandomNumber = size => { /*Abrimos llave*/  /*Agregamos las funcion para generar numeros aleatorios
                                colocamos en una variable  el nombre de la funcion y
                                luego colocando un parametro de una funcion flecha, 
                                y de esta manera podemos escribir las nuevas funciones.*/

  return Math.floor(Math.random() * size); /*Esta funcion tiene que retornar algo, colocamos 
                                          la funcion Maht, que nos permite jugar con funciones matematicas 
                                          con su metodo .floor, y colocamos el metodo Random que va ha 
                                          generar un metodo aleatrorio desde el 0 y con  size, me va a 
                                          multiplicar mi numero aleattorio con el tamaño que yo desee, 
                                          osea desde el 0 hasta el tamaño que yo ingrese, y me los va
                                          aregresar en parte entera. */
}//Cerramos llave

//Funcion que se encarga de medir la distancia entre dos puntos. 
let getDistance = (e, target) => { /*Abrimos llave*/  /*colocamos la variable con el nombre la funcion para medir la distancia
                                  y va a tomar dos parametros, que son los dos puntos. 1er: el punto donde 
                                  el usuario ha dado un clik, nombrado(e significado de "evento"), colocamos 
                                  endonde esta el mapa del tesoro nombrado(target) y estos dos puntos, son los 
                                  que vamos a tener que medir y tendremos que calcularlos*/

  let diffX = e.offsetX - target.x; /*Calcularemos eje de las X y Y. 
                                    Vamos a obtener la diferencia  del eje de las X. Para ello tendremos que
                                    obtener primero la distancia de donde esta ubicado el clik del usuario. 
                                    Del e.offsetX. El nos dice, en donde el usuario ha dado clic en nuestra imagen, 
                                    y este nos da posision del eje de las X, y vamos a tener que restarlo con el otro
                                    punto que es endonde esta el mapa del tesoro, y esto lo vamos a ubicar desde el target.x.
                                    para que nos demos cuenta que esta ubicado en el eje de las x*/

  let diffY = e.offsetY - target.y;/*Esta sera la diferencia del eje de las y, simplemente hacemos lo mismo.         
                                    Vamos a obtener la diferencia  del eje de las Y. Para ello tendremos que
                                    obtener primero la distancia de donde esta ubicado el clik del usuario. 
                                    Del e.offsetY. El nos dice, en donde el usuario ha dado clic en nuestra imagen, 
                                    y este nos da posision del eje de las Y, y vamos a tener que restarlo con el otro
                                    punto que es endonde esta el mapa del tesoro, y esto lo vamos a ubicar desde el target.y,
                                    para que nos demos cuenta que esta ubicado en el eje de las Y*/

  return Math.sqrt((diffX * diffX) + (diffY * diffY));/*Aplicarmos el teorema de pitagoras, vamos a retornar desde la biblioteca 
                                                      de matematicas, vamos a obtener la raiz cuadrada de la suma de los catetos
                                                      al cuadrado(colocamos al cuadrado al eje de las X  y para hacer eso lo 
                                                      mulltiplico por si mismo) y lo vamos a sumar con y, que seria practicamente al cuadrado.
                                                      Y eso es loq ue necesitamos para obtener la distancia entre los dos puntos*/
}//Cerramos llave
let getDistanceHint = distance => { /*Abrimos llave*/  /*Funcion para darle al usuario pistas de que tan cerca esta del tesoro
                                    Tomamos como parametros con (distance) para ver que tan cerca o que tan lejos esta del mapa
                                    del tesoto. La distancia la vamos a obtener gracias a la funcion getDistance*/

  if (distance < 30) {/*Abrimos llave*/ /*Si la distancia  que me esta dando es menor a 30, es decir, esta muy cerca del mapa del mapa del tesoro*/

    return "Boiling hot!"; /*entonces retornamos que esta hirviendo, osea, que esta muy cerca */

  } //Cerramos llave
    else if (distance < 40) {/*Abrimos llave*/ /* Si la distancia es menor a 40, es dicir, no esta tan cerca */

    return "Really Hot"; /*entonces retornamos que esta muy caliente */

  } //Cerramos llave
    else if (distance < 60) {/*Abrimos llave*/ /*Si la distancia es menor a 60 */

    return "Hot";/* retornamos que esta caliente*/

  } //Cerramos llave
    else if (distance < 100) { /*Abrimos llave*/  /*Si la distancia es menos a 100 */
    
    return "Warm";/* retornamos que esta calido */

  } //Cerramos llave
    else if (distance < 180) { /*Abrimos llave*/ /*Si la distancia es menor a 180*/

    return "Cold";/* retornamos que esta frio*/

  } //Cerramos llave
    else if (distance < 360) {/*Abrimos llave*/ /*Si la diatncia es menor a 360 */

    return "Really Cold";/*retornamos que esta verdaderamente frio*/

  }//Cerramos llave 
  else {/*Abrimos llave*/ /*Cuuando no hay ninguno de estos parametros */

    return "Freezing!";/*retornamos a congelado */
  }//Cerramos llave
}//Cerramos llave
