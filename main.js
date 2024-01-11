alert ("Bienvenid@ a esta segunda pre-entrega del curso de Javascript");
let nombre = prompt ("Como te llamas ?");

if (nombre != null) {
    let consulta = parseInt(prompt(nombre + " si quieres realizar operaciones matematicas responde 1, si quieres ingesar articulos responde 2."));
    if (consulta  === 1) {
        function calculadora(num1, num2, operacion) {
            switch (operacion) {
                case "+":
                    return num1 + num2;
                    break;
                case "-":
                    return num1 - num2;
                    break;
                case "*":
                    return num1 * num2;
                    break;
                case "/":
                    return num1 / num2;
                    break;
                default:
                    return "error, no se selecciono una operacion valida"
            }
        }
        let uno = parseInt (prompt ("Ingrese el primer numero"));
        let operacion = prompt ("Ingrese el simbolo de la operacion a realizar  + sumar, - restar, * multiplicar, o / para dividir.");
        let dos = parseInt (prompt ("Ingrese el segundo numero"));
        let resultado = calculadora(uno, dos, operacion);
        alert(`El resultado es ${resultado}`);
        alert ("Fin de la secuencia, recarga la pagina con F5 para volver a empezar, o cierra para terminar");
    }
        else if ( consulta === 2) {
            class Productos {
                constructor(nombre, precio, stock) {
                    this.nombre = nombre;
                    this.precio = precio;
                    this.stock = stock;
                }
                toString() {
                    return `Nombre: ${this.nombre}, Precio: $${this.precio}, Stock: ${this.stock}`;
                }
            }
            const deposito = [];
            for (let i = 1; i <= 5; i++) {
                const nombre = prompt(`Ingrese el nombre del producto ${i}`);
                const precio = parseFloat(prompt(`Ingrese el precio del producto ${i}`));
                const stock = parseInt(prompt(`Ingrese el stock del producto ${i}`));
            
                const producto = new Productos(nombre, precio, stock);
                deposito.push(producto);
            }
            
            
            let mensaje = "Los productos ingresados son:\n\n";
            
            for (const producto of deposito) {
                mensaje += producto.toString() + "\n\n";
            }
            
            alert(mensaje);
            }
            
            alert ("Fin de la secuencia, recarga la pagina con F5 para volver a empezar, o cierra para terminar");
        }
    else {
        alert ("Pusistes otra cosa, fin del ejercicio, recarga la pagina con F5 para volver a empezar, o cierra para terminar");
        alert ("No ingreso un nombre, fin del ejercicio, recarga la pagina con F5 para volver a empezar, o cierra para terminar");

}
