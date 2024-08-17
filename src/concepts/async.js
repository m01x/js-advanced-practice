import { heroes } from "../data/heroes"

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  //console.log(' Async component checked!')
  const id1 = '5d86371fd55e2e2a30fe1ccb'
  console.log('Inicio de componente')
  findHero(id1)
    .then(name=>element.innerHTML = name)
    .catch(error=> element.innerHTML = error)
console.log( 'fin del componente')
}


/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
  const hero = heroes.find( hero => hero.id === id)

  if(!hero)
    throw new Error(`El hero con el id ${id} no existe.`)
  //el async transforma el return en una promesa resuelta
  return hero.name
}
