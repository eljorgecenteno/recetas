
document.addEventListener("DOMContentLoaded", () => {
  const temaBtn = document.getElementById('tema-btn');
  const body = document.body;
 
  if (localStorage.getItem('tema') === 'oscuro') {
    body.classList.add('tema-oscuro');
  }

  temaBtn.addEventListener('click', () => {
    body.classList.toggle('tema-oscuro');

 
    if (body.classList.contains('tema-oscuro')) {
      localStorage.setItem('tema', 'oscuro');
    } else {
      localStorage.setItem('tema', 'claro');
    }
  });
});
