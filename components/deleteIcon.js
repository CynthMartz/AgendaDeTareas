const deleteIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas','fa-trash-alt','trashIcon','icon');
    i.addEventListener('click', deleteTask);

    return i;
};

//Elimina el card
const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
};

export default deleteIcon;