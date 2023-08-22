// Obtener Datos de una API
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
    const firstThreePosts = data.slice(0, 3);
    console.log("Primeros tres elementos:", firstThreePosts);
    displayData(firstThreePosts);
})
.catch(error => console.error('Error al obtener datos:', error));


// Enviar Datos al Servidor
const postObject = {
title: "Nuevo Título",
body: "Contenido del nuevo post"
};

fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST",
headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify(postObject)
})
.then(response => response.json())
.then(data => {
console.log("Respuesta del servidor:", data);
})
.catch(error => console.error('Error al enviar datos:', error));

// Descargar una Imagen y Mostrar en <img>
const imgElement = document.createElement("img");
imgElement.src = "https://via.placeholder.com/150";
imgElement.onload = () => {
console.log("Imagen descargada y mostrada.");
document.getElementById("image-container").appendChild(imgElement);
};
imgElement.onerror = () => {
console.error("Error al cargar la imagen.");
};

// Función para mostrar los datos en el HTML
function displayData(data) {
const dataContainer = document.getElementById("data");
dataContainer.innerHTML = "<h6>Datos Obtenidos:</h6>";

data.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}<br><br>`;
    dataContainer.appendChild(postDiv);
});
}