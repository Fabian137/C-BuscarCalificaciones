function buscarCalificaciones(){
  var estudiantes = {
    ALUMNO1: {
      algebra: 10,
      calculo: 7,
      fisica: 9,
    },
    ALUMNO2: {
      algebra: 5,
      calculo: 7,
      fisica: 8,
    },
    ALUMNO3: {
      algebra: 9,
      calculo: 6,
      fisica: 7,
    },
    ALUMNO4: {
      algebra: 5,
      calculo: 6,
      fisica: 6,
    }
  }
  var nombreEstudiante = document.getElementById('nombreEstudiante').value
  var nombreMayusc = nombreEstudiante.toUpperCase()
  var verificacion = estudiantes[nombreMayusc]
  var resutados = document.getElementById('resultados')
  if(verificacion == undefined){
    resultados.innerHTML = `
    <div class="alert alert-danger" role="alert">
      Alumno no existe
    </div>`
  }
  else{
    resutados.innerHTML =`
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Asignatura</th>
          <th scope="col">Calificación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Álgebra</td>
          <td>${verificacion.algebra}</td>
        </tr>
        <tr>
          <td>Cálculo</td>
          <td>${verificacion.calculo}</td>
        </tr>
        <tr>
          <td>Física</td>
          <td>${verificacion.fisica}</td>
        </tr>
      </tbody>
    </table>`
  }
}