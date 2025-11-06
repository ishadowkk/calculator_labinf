var valores = "";

function addVal(i) {
  valores += i;
  document.getElementById("resultados").value = valores;
}

function addOperator(x) {
  if (x === "C") {
    valores = "";
  } else {
    valores += x;
  }
  document.getElementById("resultados").value = valores;
}

function calculate() {
  valores = eval(valores);
  document.getElementById("resultados").value = valores;
}
