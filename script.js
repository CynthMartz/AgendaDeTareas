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
    //content captura lo que el usuario escribe
    const content =`<div>    
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
</div>
<i class="fas fa-trash-alt trashIcon icon"></i>`;
    
    task.innerHTML = content; // escribe en el input de las tareas

    list.appendChild(task); //crea contenido hijo

    console.log(content);

};

console.log(btn);

//arrow fuctions o funciones anónimas
btn.addEventListener('click', createTask)
