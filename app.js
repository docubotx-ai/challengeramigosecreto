// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Crear un array para almacenar los nombres
let amigos = [];

// 2. Implementa una función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual de amigos
    actualizarListaAmigos();
}

// 3. Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';
    
    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // Crear elemento de lista
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        
        // Agregar elementos a la lista
        listaAmigos.appendChild(elementoLista);
    }
}

// 4. Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar que hay amigos en la lista
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un amigo a la lista.');
        return;
    }
    
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>${amigoSecreto}</li>`;
}
