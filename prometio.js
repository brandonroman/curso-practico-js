const lista1 = [
    100,
    200,
    300,
    500,
];



function calcularMediaArimetica(lista) {
    // let sumaLista = 0;

    // for(let i of lista1) {
    //     sumaLista = sumaLista + i;
    // }

    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado * nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}