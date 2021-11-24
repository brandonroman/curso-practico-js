//Código del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Código del triángulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


console.groupEnd();

//Código del circulo
console.group("circulo");

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}


//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio) {
   return (radio * radio) * PI;
}

console.groupEnd();

//ALTURA TRIÁNGULO ISÓCELES
function alturaTrianguloIso(lado1, lado2, base) {
    const altura = Math.sqrt((lado1 * lado1) - ((base * base) / 2));
    return altura;
}



//Aquí interactuamos con el html

//CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}


//TRIANGULO
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("InputTrianguloBase");
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    alert(perimetro);
}
function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTrianguloBase");
    const value1 = input1.value;
    
    const input2 = document.getElementById("InputTrianguloAltura");
    const value2 = input2.value;

    const area = areaTriangulo(value1, value2);

    alert(area);
}

//CIRCULO
function calcularCircunferenciaCirculo() {
    const input1 = document.getElementById("InputRadio");
    const value1 = input1.value;

    const circunferencia = perimetroCirculo(value1);

    alert(circunferencia);
}
function calcularAreaCirculo() {
    const input1 = document.getElementById("InputRadio");
    const value1 = input1.value;

    const area = areaCirculo(value1);

    alert(area);
}

//ALTURA TRIANGULO ISOCELES
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

function altura() {
    const a = document.getElementById("InputLadoTrianguloIso1");
    const b = document.getElementById("InputLadoTrianguloIso2");
    const c = document.getElementById("InputBaseTrianguloIso");

    console.log(a + b + c)

    const altura = alturaTrianguloIsosceles(a, b, c);

    alert(altura);
}