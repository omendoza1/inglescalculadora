// Función para agregar una calificación del profesor
function addTeacherGrade() {
    const teacherGrades = document.getElementById("teacher-grades");
    const newInput = document.createElement("input");
    newInput.type = "number";
    newInput.name = "teacher-grade";
    newInput.min = 0;
    newInput.max = 100;
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
  