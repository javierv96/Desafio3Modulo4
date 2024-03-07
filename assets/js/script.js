// Definición de la función asíncrona getPosts que obtiene los posts desde la API
const getPosts = async () => {
    try {
        // URL de la API de JSONPlaceholder que proporciona una lista de posts
        const url = 'https://jsonplaceholder.typicode.com/posts';
        
        // Realiza una solicitud HTTP GET a la URL utilizando fetch
        const respuesta = await fetch(url);
        
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener los posts');
        }
        
        // Convierte la respuesta a formato JSON
        const posts = await respuesta.json();
        
        // Llama a la función mostrarPosts con la lista de posts obtenidos
        mostrarPosts(posts);
    } catch (error) {
        // Si ocurre un error, lo maneja mostrando un mensaje en la consola y en el documento HTML
        console.error('Error al obtener posts:', error);
        document.getElementById('post-data').innerHTML = '<p>Error al obtener los posts</p>';
    }
}

// Función que muestra los posts en el documento HTML
const mostrarPosts = (posts) => {
    // Crea una cadena HTML que representa una lista no ordenada (<ul>) de posts
    const postHTML =
        '<ul>' +
        // Utiliza el método map para crear un elemento <li> para cada post
        posts.map(post => `<li><b>${post.title}:</b><p>${post.body}</p></li>`).join('') +
        '</ul>';
    
    // Inserta la cadena HTML en el elemento con el ID 'post-data' en el documento HTML
    document.getElementById('post-data').innerHTML = postHTML;
}

// Agrega un evento de escucha al botón con el ID 'button' para llamar a la función getPosts cuando se hace clic en él
document.getElementById("button").addEventListener("click", getPosts);