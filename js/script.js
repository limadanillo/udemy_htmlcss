//var resposta = confirm("Deseja excluir o documento ?");

/*
console.log(resposta);
*/

/*var a = 10;
var b = 33;
*/
//alert(a+b);

function somar(a , b) {
  return a + b;
}

console.log(somar(2, 5));

document.getElementById('btn-calcular').onclick = function functionName() {
  var valorA = document.getElementById("valor-a").value;//string
  var valorB = document.getElementById("valor-b").value;//string
  alert(parseInt(valorA)+
  parseInt(valorB));//Se nao tiver parseInt vai concatenar
}
