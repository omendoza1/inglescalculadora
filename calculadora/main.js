document.getElementById("btn-calcular").disabled = true;
// Función para agregar una calificación del profesor
function addTeacherGrade() {
    const teacherGrades = document.getElementById("teacher-grades");
    const newInput = document.createElement("input");
    newInput.type = "number";
    newInput.name = "teacher-grade";
    newInput.min = 0;
    newInput.max = 5;
    newInput.required = true;
    teacherGrades.appendChild(newInput);
  }
  
  // Función para calcular la nota final
  function calculateFinalGrade() {
    // Obtener las calificaciones de assignments
    const assignments1 = parseFloat(document.getElementById("assignments1").value);
    const assignments2 = parseFloat(document.getElementById("assignments2").value);
    const assignments3 = parseFloat(document.getElementById("assignments3").value);
    const assignments4 = parseFloat(document.getElementById("assignments4").value);
  
    // Obtener las calificaciones de tests
    const tests1 = parseFloat(document.getElementById("tests1").value);
    const tests2 = parseFloat(document.getElementById("tests2").value);
    const tests3 = parseFloat(document.getElementById("tests3").value);
    const tests4 = parseFloat(document.getElementById("tests4").value);
  
    // Obtener las calificaciones del profesor
    const teacherGrades = document.getElementsByName("teacher-grade");
    let teacherTotal = 0;
    for (let i = 0; i < teacherGrades.length; i++) {
      teacherTotal += parseFloat(teacherGrades[i].value);
    }
    const teacherAverage = teacherTotal / teacherGrades.length;
  
    // Obtener las calificaciones de expresión oral
    const speaking = parseFloat(document.getElementById("speaking").value);
    const cut1 = parseFloat(document.getElementById("cut1").value);
  
    // Calcular la nota final
    const assignmentsAverage = (assignments1 + assignments2 + assignments3 + assignments4) / 4;
    const testsAverage = (tests1 + tests2 + tests3 + tests4) / 4;
    const expressionGrade = (cut1/100)*5*0.08+(speaking/100)*5*0.08 ;
    const finalGrade = (assignmentsAverage /100)*5* 0.24+ (testsAverage /100)*5* 0.24 + (teacherAverage * 0.36)+(expressionGrade);
  
    // Mostrar la nota final en un cuadro de diálogo
    window.alert("La nota final es: " + finalGrade.toFixed(2));

  }
  function limpiarFormulario() {

    const campos = document.querySelectorAll("#formulario .form-control");
    for (let i = 0; i < campos.length; i++) {
      campos[i].value = "";
      campos[i].disabled = false;
    }
    document.getElementById("btn-limpiar").disabled = true;
    document.getElementById("btn-calcular").disabled = true;
  }
  function validarFormulario() {
    const campos = document.querySelectorAll("#formulario .form-control");
    let formularioValido = true;
    for (let i = 0; i < campos.length; i++) {
      if (campos[i].value === "") {
        formularioValido = false;
        break;
      }
    }
    
    document.getElementById("btn-calcular").disabled = !formularioValido;
  }
  window.addEventListener("load", () => {
   
  
    // Validar el formulario al cambiar el valor de algún campo
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("input", validarFormulario);
  
    // Calcular el sueldo al hacer clic en el botón calcular
    const btnCalcular = document.getElementById("btn-calcular");
    btnCalcular.addEventListener("click", () => {
      calculateFinalGrade();
      btnCalcular.disabled = true;
      document.getElementById("btn-limpiar").disabled = false;
      formulario.querySelectorAll(".form-control").forEach(campo => {
        campo.disabled = true;
      });
    });
 
    // Limpiar el formulario al hacer clic en el botón limpiar
    const btnLimpiar = document.getElementById("btn-limpiar");
    btnLimpiar.addEventListener("click", limpiarFormulario);
  });
 /*
  const inputs = document.querySelectorAll(".form-control");
inputs.forEach(input => {
  let noBorrar = false;
  let haDigitado = false;

  input.addEventListener("focus", function() {
    if (this.value === "0") {
      noBorrar = true;
      }
      });
      
      input.addEventListener("keydown", function(event) {
      
      
      if (event.key === "Backspace" && noBorrar) {
        event.preventDefault();
        if (!haDigitado) {
          
          this.classList.add("temblor");
        }
      }
      
      if (this.value > "0") {
      noBorrar = false;
      haDigitado = true;
      }
      });
      
      
      
      input.addEventListener("input", function() {
        const maxlength = this.getAttribute("data-maxlength");
        if (this.value.length > maxlength) {
          this.value = this.value.slice(0, maxlength);
        }
        if (this.value.length === maxlength) {
          const nextInput = this.nextElementSibling;
          if (nextInput) {
            nextInput.focus();
          }
        }
      });
      
     
      });
*/




  