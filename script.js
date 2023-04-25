(() => {
const btn = document.querySelector('[data-form-btn]');

const createTask =(evento)=>{
    evento.preventDefault();
    const input =document.querySelector('[data-form-input]');
    const value =input.value;
    const list = document.querySelector('[data-list]');
    const task =document.createElement('li');
    task.classList.add('card'); //agrega las tareas
    input.value = ''; // hace que se elimine el campo una vez que se dé en el botón
    //backticks 
    // Crear constante de div
    const taskContent = document.createElement("div");
    

    //<span class="task">${value}</span>
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    //content captura lo que el usuario escribe
    const content =`   
    
<i class="fas fa-trash-alt trashIcon icon"></i>`;
    
  //  task.innerHTML = content; // escribe en el input de las tareas
    task.appendChild(taskContent) //crea contenido hijo para el icono check
    list.appendChild(task); //crea contenido hijo

};


//arrow fuctions o funciones anónimas
btn.addEventListener('click', createTask)

//Crear constante de la i 
// <i class="far fa-check-square icon"></i>
const checkComplete = () => {
    const i = document.createElement("i")
    i.classList.add('far','fa-check-square','icon')
    i.addEventListener('click', completeTask);

    return i
};
  // Immediately invoked function expression IIFE -  seleccionar y deseleccionar el check- tambien se llama a la clase fas para poner en azul el check.
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};

})();