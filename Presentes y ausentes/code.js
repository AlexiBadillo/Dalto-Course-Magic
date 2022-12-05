let cantidad = prompt("Cuántos alumnos son?");
let alumnosTotales = [];
for (let i = 0; i < cantidad; i++) {
  alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}
const tomarAsis = (nombre, p) => {
  let presencia = prompt(nombre);
  if (presencia == "p" || presencia == "P") {
    alumnosTotales[p][1]++;
  }
};

for (let i = 0; i < 30; i++) {
  for (alumno in alumnosTotales) {
    tomarAsis(alumnosTotales[alumno][0], alumno);
  }
}

for (alumno in alumnosTotales) {
  let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b><br>
    ________Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`;
  if (30 - alumnosTotales[alumno][1] > 18) {
    resultado += ` <b>REPROBADO POR INASISTENCIA</b><br><br>`;
  } else {
    resultado += "<br><br>";
  }
  document.write(resultado);
}
