import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = element => {
  const renderHero = hero => {
    element.innerHTML = hero.name;
  };

  const render2Heroes = (hero1, hero2) => {
    element.innerHTML = `<h3>${hero1.name}</h3><h3>${hero2.name}</h3>`;
  };

  const renderError = error => {
    element.innerHTML = `<h1 style='color:red'>Error!</h1><br/><h3>${error}</h3>`;
  };
  const id1 = '5d86371f25a058e5b1c8a65e';
  const id2 = '5d86371f1efebc31def272e2';

  let hero1, hero2;

  //!Top choice, ojo , promise All ejecuta todas las promesas en paralelo,
  //!Si se requeire ejecutar en algun orden las promesas, utilizar forma 2!
  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2]) => render2Heroes(hero1, hero2))
    .catch(renderError);


    
  //!FORMA 1
  //promise hell... Ojo!!
  // findHero(id1)
  //   .then((hero) => {
  //     hero1 = hero

  //     findHero(id2)
  //       .then((hero2) => {
  //         render2Heroes(hero1, hero2)
  //       })
  //       .catch((error) => renderError(error))
  //   })
  //   .catch((error) => renderError(error))

  //!FORMA 2
  //Refactorización del Promise Hell
  // findHero(id1)
  //   .then((hero) => {
  //     hero1 = hero
  //     return findHero(id2)
  //   })
  //   .then((hero2) => {
  //     render2Heroes(hero1, hero2)
  //   })
  //   .catch(renderError)
};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = id => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find(hero => hero.id === id);
    if (hero) {
      resolve(hero);
      return;
    }

    reject(`Hero with id: ${id} not found`);
  });
};

/**
 * Esta es la forma "principiante" de hacer la misma funcion findhero.
 * Solo que ya noo es muy comun verlo asi, por la pequena opcimizacion de codigo
 * al retornar (return) la instancia directamente, en vez de crear la constante
 * promise
 * 
 * const findHero = (id) => {
  const promise = new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id)
    if (hero) {
      resolve(hero)
      return
    }

    reject(`Hero with id: ${id} not found`)
  })

  return promise
}
 */
