import { heroes } from '../data/heroes'
/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  //Vite, a diferencia de node no trabaja con process.env , esto es valido y ricolino
  //para node :c , en Vite , es "import.meta.env"
  //console.log(import.meta.env)
  console.log(' callback component !')

  const id = '5d86371fd55e2e2a30fe1ccb'
  findHero(id, (error, hero) => {
    //element.innerHTML = hero?.name || 'No hay heroe' <--- Manejo de errores en promesas!
    if (error) {
      element.innerHTML = error
      return
    }
    element.innerHTML = hero.name
  })
}

/**
 *
 * @param {String} id
 * @param {(error:String|null,hero:Object)=>void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id)
  if (!hero) {
    callback(`Hero with id ${id} not found.`)
    return //retorna undefined
  }
  /**
   * Algo interesante ocurre aqui, como estoy definiendo que el primer argumento de
   * mi funcion callback es un error.... si llega algun error, hacemos un return undefined,
   * para cortar la ejecución de mi funcion.
   *
   * Pero si no es un error, puedo "bypasear" el argumento del error con un null...
   * para que si se ejecute el callback con el Id que espera. (clase 132.)
   */
  callback(null, hero)
}
