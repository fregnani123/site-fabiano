const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function sortear (){
  let np = 25;
  let ns = Math.round(Math.random () * np)

  document.getElementById("d").innerHTML = ns}

  function mouse (m) {
    let txt = document.querySelector('h1.f')
    txt.style.backgroundColor = "white"
}
 function mouseout (){
  let txt = document.querySelector('h1.f')
  txt.style.backgroundColor = 'black'
}
  
 