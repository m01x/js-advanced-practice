/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComonent = (element) => {

  element.innerHTML = '<i>⏱️Loading...</i>'
  const renderValue =(value) => {
    element.innerHTML = value

  }

  //Todas se ejecutan, pero nos interesa la que se resuelva mas rapido.
  Promise.race([
    slowPromise(),
    mediumPromise(),
    fastPromise(), 
    slowPromise(),
    mediumPromise(),
    slowPromise(),
    fastPromise()]).then(renderValue)
}

const slowPromise = () => 
  new Promise( resolve =>{
    setTimeout(() => {
      resolve('Slow Promise');
    }, 2000);
  })


const mediumPromise = () => 
  new Promise( resolve =>{
    setTimeout(() => {
      resolve('Medium Promise');
    }, 7500);
  })


const fastPromise = () => 
  new Promise( resolve =>{
    setTimeout(() => {
      resolve('Fast Promise');
    }, 3000);
  })

