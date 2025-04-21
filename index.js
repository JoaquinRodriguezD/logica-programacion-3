function calculateFactorial() {
  //obtener el valor del input y hacer un parseInt para convertirlo a un número
  const n = parseInt(document.getElementById("number").value, 10);

  //Validación de que exista un valor en el input
  if (isNaN(n)) {
    document.getElementById("result").innerHTML =
      "Error: por favor, introduce un número válido.";
    return;
  }

  //Validación de que el númer no sea negativo y retorno de resultado 
  if (n < 0) {
    document.getElementById("result").innerHTML =
      "Error: no se admiten números negativos.";
  } else if (n === 0 || n === 1) {
    document.getElementById("result").innerHTML = `El factorial de ${n} es 1.`;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    document.getElementById(
      "result"
    ).innerHTML = `El factorial de ${n} es ${result}.`;
  }
}
