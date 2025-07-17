 const inputTarea = document.getElementById('inputTarea');
        const btnAgregar = document.getElementById('btnAgregar');
        const listaTareas = document.getElementById('listaTareas');

        // Agregar tarea
        btnAgregar.addEventListener('click', () => {
            const texto = inputTarea.value.trim();
            if(texto === '') return;

            // Crear elemento li
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                ${texto}
                <button class="btn btn-danger btn-sm">Eliminar</button>
            `;

            // Agregar evento al botón eliminar
            li.querySelector('button').addEventListener('click', () => {
                li.remove();
            });

            // Agregar a la lista
            listaTareas.appendChild(li);

            // Limpiar input
            inputTarea.value = '';
        });