/**
 *
 * @param {HTMLDivElement} element
 *
 * Que es una funcion generadora?
 */
export const generatorFunctionsComponent = element => {
  const genId = idGenerator();

  const button = document.createElement('button');
  button.innerText = `Click me!`;
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener('click', evento => renderButton());
  /**
   * O tambien, como esta funcion no recibe argumentos, podemnos llamarla de esta forma
   * button.addEventListener('click', renderButton);
   */

  // const myGenerator = myFirstGeneratorFunction();

  // console.log(myGenerator.next()); //Esto es como... dame el primer valor! seria el primer yield
  // console.log(myGenerator.next()); //y ahora el siguiente!
  // console.log(myGenerator.next()); // next!...
  // console.log(myGenerator.next()); // next!... hace sentido el next
  // console.log(myGenerator.next()); // epa! ya no hay mas
  // console.log(myGenerator.next()); //no existe este yield, se paso del return.

  // const genId = idGenerator();
  // console.log(genId.next());
  // console.log(genId.next());
  // console.log(genId.next());
  // console.log(genId.next());
};

function* myFirstGeneratorFunction() {
  //se ve extrano.. o.o

  //yield es como un return en funciones generadoras... ahi se va a pausar su ejecucion.
  yield 'primer valor';
  yield 'segundo valor';
  yield 'tercer valor';
  yield 'cuarto valor';

  return 'no hay valores..';
  yield 'ya no pueden hacer nada..';
  //auxilio, se ve super raro esto, buscar mas sobre funciones generadoras pls
}

function* idGenerator() {
  let currentId = 0;
  while (true) {
    yield ++currentId;
  }
}
