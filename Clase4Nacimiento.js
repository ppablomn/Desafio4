// Solicitar al usuario ingresar precio a calcular intereses

let recargo1 = 0.15
let recargo2 = 0.25
let recargo3 = 0.50

function tresCuotas(precio, recargo1) {
    alert(`El monto final es de = ${precio*recargo1+precio}`);
}

function seisCuotas(precio, recargo2) {
    alert(`El monto final es de = ${precio*recargo2+precio}`);
}

function doceCuotas(precio, recargo3) {
    alert(`El monto final es de = ${precio*recargo3+precio}`);

}
function leerOpcion(texto = "Ingresa una de las siguientes opciones") {
let opcion = Number(prompt(` ${texto}

1 - Tres Cuotas
2 - Seis Cuotas
3 - Doce Cuotas

0 - Finalizar programa`));
return opcion;
}

let menu = leerOpcion();

let precio;
while (menu != 0) {
    switch (menu) {
        case 1:
            precio = Number(prompt("Ingrese el precio a calcular intereses"));
            tresCuotas(precio, recargo1);
            menu = leerOpcion();
            break;
        case 2:
            precio = Number(prompt("Ingrese el precio a calcular intereses"));
            seisCuotas(precio, recargo2);
            menu = leerOpcion();
            break;
        case 3:
            precio = Number(prompt("Ingrese el precio a calcular intereses"));
            doceCuotas(precio, recargo3);
            menu = leerOpcion();
            break;
        default:
            menu = leerOpcion("La opcion ingresada es incorrecta:");
            break;
    }
}
alert ("Programa finalizado")