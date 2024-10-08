/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwait2Component = async element => {
  console.time('Start');
  // const value1 = await slowPromise();
  // const value2 = await mediumPromise();
  // const value3 = await fastPromise();

  //Esto demora, como 4 segundos

  const [value1, value2, value3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise()
  ]);
  //Utilizando promise.all ejecuta en paralelo todo, retornando los valores en las constantes
  //desestructuradas, demora 2 segundos.

  element.innerHTML = `
  value1: ${value1} <br/>
  value2: ${value2} <br/>
  value3: ${value3} <br/>`;

  console.timeEnd('Start');
};

const slowPromise = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('Slow Promise');
    }, 2000);
  });

const mediumPromise = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('Medium Promise');
    }, 1500);
  });

const fastPromise = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('Fast Promise');
    }, 1000);
  });
