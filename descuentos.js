// const precioOriginal = 120;
// const descuento = 18;
const codigosDescuento = [
    {
        code: "hola",
        discount: 15
    },
    {
        code: "adios",
        discount: 20,
    },
    {
        code: "mucho",
        discount: 30,
    },
    {
        code: "demasiado",
        discount: 50,
    }
];

function funcion(precio, descuento) {
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const precio = document.getElementById("InputPrice");
    const precioValue = precio.value;

    const descuento = document.getElementById("InputDiscountCode");
    const descuentoValue = descuento.value;

    const valido = function(cupon) {
        return cupon.code === descuentoValue;
    }

    const cuponUser = codigosDescuento.find(valido);

    if(!cuponUser) {
        alert("Ese cupón no es válido!");
    } else {
        const discount = cuponUser.discount;

        const precioConDescuento = funcion(precioValue, discount);
    
        const resultP = document.getElementById("ResultPrice");
    
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}