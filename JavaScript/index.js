const numero = Number (prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const raizQuadrada = document.getElementById('raiz-quadrada');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const baixo = document.getElementById('baixo');
const cima = document.getElementById('cima');
const duas = document.getElementById('duas');



numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML = `<p>A raiz quadrada de ${numero} é ${Math.sqrt(numero)}</p>`;
inteiro.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
nan.innerHTML = `<p> É NaN: ${Number.isNaN(numero)}</p>`;
baixo.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
cima.innerHTML = `<p>Arredondando para cima ${Math.ceil(numero)}</p>`;
duas.innerHTML = `<p>Com duas casas decimais: ${parseFloat(numero.toFixed(2))}</p>`;
