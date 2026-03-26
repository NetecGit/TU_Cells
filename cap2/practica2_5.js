
// Tarea 2

document.querySelector("#updateContent").addEventListener("click", () => {
    const description = document.querySelector("#description");
    description.textContent = "El contenido ha sido actualizado dinámicamente.";
  });


  // Tarea 3

  document.querySelector("#toggleClass").addEventListener("click", () => {
    const title = document.querySelector("#title");
    title.classList.toggle("highlight");
  });

  // Tarea 4

  document.querySelector("#updateContent").addEventListener("click", () => {
    const description = document.querySelector("#description");
    console.log("Información actual:", description.dataset.info);
    description.dataset.info = "actualizado";
  });


  // Tarea 5

  document.querySelector("#saveToLocalStorage").addEventListener("click", () => {
    const description = document.querySelector("#description").textContent;
    localStorage.setItem("description", description);
    document.querySelector("#message").textContent = "Contenido guardado en LocalStorage.";
  });
  
  document.querySelector("#loadFromLocalStorage").addEventListener("click", () => {
    const savedDescription = localStorage.getItem("description");
    if (savedDescription) {
      document.querySelector("#description").textContent = savedDescription;
      document.querySelector("#message").textContent = "Contenido cargado desde LocalStorage.";
    } else {
      document.querySelector("#message").textContent = "No hay contenido guardado en LocalStorage.";
    }
  });
  
  document.querySelector("#clearLocalStorage").addEventListener("click", () => {
    localStorage.removeItem("description");
    document.querySelector("#message").textContent = "LocalStorage limpiado.";
  });


  // Tareas Adicionales

// Guardar el estado del botón en sessionStorage
document.querySelector("#toggleClass").addEventListener("click", () => {
    const title = document.querySelector("#title");
    const isHighlighted = title.classList.contains("highlight");

    // Guardar el estado (true o false) en sessionStorage
    sessionStorage.setItem("isHighlighted", isHighlighted);
});

// Restaurar el estado del botón al cargar la página
window.addEventListener("load", () => {
    const isHighlighted = sessionStorage.getItem("isHighlighted") === "true";

    if (isHighlighted) {
        document.querySelector("#title").classList.add("highlight");
    }
});


// Guardar el estado del botón en sessionStorage
document.querySelector("#toggleClass").addEventListener("click", () => {
    const title = document.querySelector("#title");
    const isHighlighted = title.classList.contains("highlight");

    // Guardar el estado (true o false) en sessionStorage
    sessionStorage.setItem("isHighlighted", isHighlighted);
});

// Restaurar el estado del botón al cargar la página
window.addEventListener("load", () => {
    const isHighlighted = sessionStorage.getItem("isHighlighted") === "true";

    if (isHighlighted) {
        document.querySelector("#title").classList.add("highlight");
    }
});
