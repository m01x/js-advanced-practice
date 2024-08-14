/**
 *
 * @param {HTMLDivElement} element
 */
export const environmentsComponents = (element) => {
  //Vite, a diferencia de node no trabaja con process.env , esto es valido y ricolino
  //para node :c , en Vite , es "import.meta.env"
  //console.log(import.meta.env)

  const html = `
    variables:`
  element.innerHTML = html
}
