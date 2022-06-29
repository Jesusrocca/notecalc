const buttonLimpiar = document.getElementById('buttonLimpiar');
const form = document.getElementById('MF');

// limpiar formulario
buttonLimpiar.addEventListener('click', (e) => {
  form.reset();
});

// when the user press the enter key or click on the button, the form will submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // nosotros obtenemos los valores de los inputs con el formData API lo cual nos permite obtener los valores de los inputs por sus "name"
  const formData = new FormData(e.currentTarget);

  const X = Number(formData.get('nota1'));
  const XP = Number(formData.get('porcentaje1'));

  const Y = Number(formData.get('nota2'));
  const YP = Number(formData.get('porcentaje2'));

  const Z = Number(formData.get('nota3'));
  const ZP = Number(formData.get('porcentaje3'));

  // inicilizar variables
  let R1;
  if (X < 1 || XP > 100 || X > 20 || XP < 1) {
    alert('Ingrese datos correctos en la NOTA 1');
  } else {
    R1 = X * (XP / 100);
  }

  // inicilizar variables
  let R2;
  if (Y < 1 || Y > 20 || YP > 100 || YP < 1) {
    alert('Ingrese datos correctos en la NOTA 2');
  } else {
    R2 = Y * (YP / 100);
  }

  // inicilizar variables
  let R3;
  if (Z < 1 || Z > 20 || ZP > 100 || ZP < 1) {
    alert('Ingrese datos correctos en la NOTA 3');
  } else {
    R3 = Y * (ZP / 100);
  }

  document.getElementById('elresultado').textContent = R1 + R2 + R3;
});
