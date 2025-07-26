const nuevaTareaInput = document.getElementById('nueva-tarea-input')
const agregarTareaBtn = document.getElementById('agregar-tarea-btn')
const listaTareas = document.getElementById('lista-tareas')

function agregarTarea() {
    console.log("agregarTarea() ejecutado");
    const textTarea = nuevaTareaInput.value.trim();
    console.log(textTarea);
    if (textTarea !== '') {

        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textTarea;
        listaTareas.appendChild(nuevaTarea);
    }else {
        console.log("No debe ingresar una tarea vacia")
    }


}


