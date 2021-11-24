const lista1 = [1, 2, 3, 1, 2, 3, 5, 1, 1, 1, 2, 2, 3, 1];

function funcion(lista) {
    const lista1Count = {};
    
    lista.map(function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
    });
    
    const lista1Array = Object.entries(lista1Count).sort((a, b) => a[1] - b[1]);
    
    const moda = lista1Array[lista1Array.length - 1];
    return moda
}