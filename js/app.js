const buscador = document.getElementById("busqueda");
const peliculas = document.querySelectorAll(".pelicula");
const mensaje = document.getElementById("sin-resultados");

// Recuperar películas guardadas en el navegador
let peliculasVistas = JSON.parse(
    localStorage.getItem("peliculasVistas") || "[]"
);

// Configurar los botones de cada película
peliculas.forEach(function(pelicula) {

    const boton = pelicula.querySelector(".boton-vista");
    const id = pelicula.dataset.id;

    function actualizarEstado() {
        const vista = peliculasVistas.includes(id);

        pelicula.classList.toggle("vista", vista);

        boton.textContent = vista
            ? "✓ Vista"
            : "Marcar como vista";

        boton.setAttribute("aria-pressed", String(vista));
    }

    actualizarEstado();

    boton.addEventListener("click", function() {

        if (peliculasVistas.includes(id)) {

            peliculasVistas = peliculasVistas.filter(
                function(elemento) {
                    return elemento !== id;
                }
            );

        } else {
            peliculasVistas.push(id);
        }

        localStorage.setItem(
            "peliculasVistas",
            JSON.stringify(peliculasVistas)
        );

        actualizarEstado();
    });

});

// Buscador de películas
buscador.addEventListener("input", function() {

    const texto = buscador.value.toLowerCase().trim();
    let encontrados = 0;

    peliculas.forEach(function(pelicula) {

        const titulo = pelicula.querySelector("h2")
            .textContent.toLowerCase();

        if (titulo.includes(texto)) {
            pelicula.hidden = false;
            encontrados++;
        } else {
            pelicula.hidden = true;
        }

    });

    mensaje.hidden = encontrados > 0;

});

