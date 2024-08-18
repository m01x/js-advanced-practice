import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorAsyncComponent = async element => {
  const heroGenerator = getHeroGenerator();
  let isFinished = false;

  do {
    const { value, done } = await heroGenerator.next();

    isFinished = done;
    if (isFinished) break;
    element.innerHTML = value;
  } while (!isFinished); //haz el ciclo hasta que se cumpla, osea ya no queden yields done=trues
};

async function* getHeroGenerator() {
  for (const hero of heroes) {
    await sleep();
    yield hero.name;
  }
}

const sleep = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
