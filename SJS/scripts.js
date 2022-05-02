function limpiar() {
  document.getElementById("MF").reset();
}

function calcular() {
  /*
  los nodos que extraes de document no cambiaran, así quedan mejor declaradas como constantes
  */
  const X = document.getElementById("valor1").valueAsNumber;
  const XP = document.getElementById("porvalor1").valueAsNumber;

  // inicilizar variables
  let R1;
  if (X < 1 || XP > 100 || X > 20 || XP < 1) {
    alert("Ingrese datos correctos en la NOTA 1");
  } else {
    R1 = X * (XP / 100);
  }

  /*
  los nodos que extraes de document no cambiaran, así quedan mejor declaradas como constantes
  */
  const Y = document.getElementById("valor2").valueAsNumber;
  const YP = document.getElementById("porvalor2").valueAsNumber;

  // inicilizar variables
  let R2;
  if (Y < 1 || Y > 20 || YP > 100 || YP < 1) {
    alert("Ingrese datos correctos en la NOTA 2");
  } else {
    R2 = Y * (YP / 100);
  }

  /*
  los nodos que extraes del document no cambiaran, así quedan mejor declaradas como constantes
  */
  const Z = document.getElementById("valor3").valueAsNumber;
  const ZP = document.getElementById("porvalor3").valueAsNumber;

  // inicilizar variables
  let R3;
  if (Z < 1 || Z > 20 || ZP > 100 || ZP < 1) {
    alert("Ingrese datos correctos en la NOTA 3");
  } else {
    R3 = Y * (ZP / 100);
  }

  document.getElementById("elresultado").innerHTML = R1 + R2 + R3;
}
