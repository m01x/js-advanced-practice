import { heroes } from "../data/heroes"

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  //console.log(' Async component checked!')
  const id1 = '5d86371fd55e2e2a30fe1ccb'

  findHero(id1)
    .then(({name})=>element.innerHTML = name)
    .catch(error=> element.innerHTML = error)

}


/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
  const hero = heroes.find( hero => hero.id === id)

  //el async transforma el return en una promesa resuelta
  return hero
}
