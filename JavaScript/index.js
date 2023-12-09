const numero = Number (prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const raizQuadrada = document.getElementById('Raiz quadrada');
const inteiro = document.getElementById('Inteiro');
const nan = document.getElementById('NaN');
const baixo = document.getElementById('Baixo');
const cima = document.getElementById('Cima');
const duas = document.getElementById('Duas');

numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML = `<p>A raiz quadrada de ${numero} é ${Math.sqrt(numero)}</p>`;
inteiro.innerHTML = `<p>${numero}é inteiro: ${Number.isInteger}</p>`;
nan.innerHTML = `<p>${numero}É NaN: ${Number.isInteger}</p>`;
baixo.innerHTML = `<p>${numero}Arredondando para baixo: ${Math.round(numero)}</p>`;
cima.innerHTML = `<p>${numero}Arredondando para cima ${Math.ceil(numero)}</p>`;
duas.innerHTML = `<p>${numero} Com duas casas decimais: ${Number.isInteger}</p>`;
