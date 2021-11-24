function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function dinamico(lista) {
  lista.sort((a, b) => a - b);

  const mitadLista = parseInt(lista.length / 2);

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedioElemento1y2 = parseInt(calcularMediaAritmetica([elemento1, elemento2]));

    mediana = promedioElemento1y2;
  } else {
    mediana = lista[mitadLista];
  }
  console.log(lista);
  return mediana;
}
