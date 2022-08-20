const link = document.querySelectorAll('.navbar__menu--link');
// recorrer los links y agregar la clase active al que se encuentre activo
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        for (let j = 0; j < link.length; j++) {
          link[j].childNodes[1].classList.remove('active');
          link[j].childNodes[3].classList.remove('active');
        }
        link[i].childNodes[1].classList.add('active');
        link[i].childNodes[3].classList.add('active');
    }
    );
}