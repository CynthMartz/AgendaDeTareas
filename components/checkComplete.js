const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click', completeTask);

    return i;
};
  // Immediately invoked function expression IIFE -  seleccionar y deseleccionar el check- tambien se llama a la clase fas para poner en azul el check.
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};

export default checkComplete;