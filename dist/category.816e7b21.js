document.addEventListener("DOMContentLoaded", ()=>{
    const temaBtn = document.getElementById('tema-btn');
    const body = document.body;
    // Verifica si el usuario tenía un tema guardado
    if (localStorage.getItem('tema') === 'oscuro') body.classList.add('tema-oscuro');
    // Evento para cambiar el tema
    temaBtn.addEventListener('click', ()=>{
        body.classList.toggle('tema-oscuro');
        // Guarda el estado del tema en localStorage
        if (body.classList.contains('tema-oscuro')) localStorage.setItem('tema', 'oscuro');
        else localStorage.setItem('tema', 'claro');
    });
});

//# sourceMappingURL=category.816e7b21.js.map
