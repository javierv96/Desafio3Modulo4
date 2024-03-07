const getPosts = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener los posts');
        }
        const posts = await respuesta.json();
        mostrarPosts(posts);
    } catch (error) {
        console.error('Error al obtener posts:', error);
        document.getElementById('post-data').innerHTML = '<p>Error al obtener los posts</p>';
    }
}

const mostrarPosts = (posts) => {
    const postHTML =
        '<ul>' +
        posts.map(post => `<li>${post.title}: </li><l>${post.body}</l>`).join('') +
        '</ul>';
    document.getElementById('post-data').innerHTML = postHTML;
}

document.getElementById("button").addEventListener("click", getPosts);