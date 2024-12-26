// Funcion para menú hamburguesa
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// URL del feed RSS de Medium convertido a JSON con rss2json
        const rss2jsonUrl = 'https://rss2json.com/api.json?rss_url=https://medium.com/feed/@gomezrobertoa';

        // Función para cargar el RSS convertido a JSON
        function loadRSS() {
            fetch(rss2jsonUrl)
                .then(response => response.json())
                .then(data => {
                    const items = data.items;
                    const container = document.getElementById('rss-content');
                    container.innerHTML = ''; // Limpiar el contenido antes de agregar nuevos items

                    items.forEach(item => {
                        const title = item.title;
                        const link = item.link;
                        const description = item.description;

                        // Crear el HTML para cada publicación
                        const post = document.createElement('div');
                        post.classList.add('rss-item');
                        post.innerHTML = `
                            <h3><a href="${link}" target="_blank">${title}</a></h3>
                            <p>${description}</p>
                        `;
                        container.appendChild(post);
                         // Hacer las imágenes dentro de las descripciones responsivas
                        const images = post.querySelectorAll('img');
                        images.forEach(img => {
                            img.style.maxWidth = '100%';  // Se asegura de que las imágenes no excedan el ancho del contenedor
                            img.style.height = 'auto';  // Ajusta la altura proporcionalmente
                        });
                    });
                })
                .catch(error => console.error('Error al cargar el RSS:', error));
        }

        // Cargar el RSS cuando la página se cargue
        window.onload = loadRSS;
