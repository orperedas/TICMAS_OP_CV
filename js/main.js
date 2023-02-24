function masTrabajos(btn_mas_trabajos, trabajos_anteriores){
    document.addEventListener("click", (e) => {
        if(e.target.matches(btn_mas_trabajos)) {
            document.querySelector(trabajos_anteriores).classList.toggle("mostrar_trabajos_anteriores");
        }
        botonTrabajosTexto()
    });
}

function masCursos(btn_mas_cursos, cursos_anteriores){
    document.addEventListener("click", (e) => {
        if (e.target.matches(btn_mas_cursos)) {
            document.querySelector(cursos_anteriores).classList.toggle("mostrar_cursos_anteriores");
        }
        botonCursosTexto()
    });
}


document.addEventListener("DOMContentLoaded", (e) => {
    masTrabajos(".btn_mas_trabajos", ".trabajos_anteriores");
    masCursos(".btn_mas_cursos", ".cursos_anteriores")
})


function botonTrabajosTexto(){
    let valor_trabajos = document.getElementById("ver_mas_trabajos");
    if (valor_trabajos.value === "Ver historial completo"){
        valor_trabajos.value = "Contraer historial";
    }
    else{
        valor_trabajos.value = "Ver historial completo";
    }
}

function botonCursosTexto(){
    let valor_cursos = document.getElementById("ver_mas_cursos");
    if (valor_cursos.value === "Ver todos los cursos"){
        valor_cursos.value = "Contraer cursos";
    }
    else{
        valor_cursos.value = "Ver todos los cursos";
    }
}
