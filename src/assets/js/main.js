let progreso_circular = document.querySelector(".progreso_circular"),
valor=document.querySelector(".valor");
let valorInicial=0,valorFinal=50,speed=30;

  let progreso=setInterval(() => {
    valorInicial++;
    valor.textContent=`${valorInicial}%`;
    progreso_circular.style.background =`conic-gradient(#00358d ${valorInicial * 3.6}deg,#ededed 0deg)`;
    if(valorInicial==valorFinal){
      clearInterval(progreso)
    }
  }, speed);
