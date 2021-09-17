let productoElegido;
let cantidadElegida;
let consultaProducto = 1;
let carrito = [];
let neto = 0;
let total = 0;

const iva = 1.21;

function Producto (nombre, precio, cantidad){
    this.nombre = nombre,
    this.precio = precio,
    this.cantidad = cantidad
}

let producto1 = new Producto('Remera tema cucurucho', 500, 0);
let producto2 = new Producto('Remera tema sunday', 500, 0);
let producto3 = new Producto('Remera tema palito', 500, 0);
let producto4 = new Producto('Remera tema helado', 500, 0);
let producto5 = new Producto('Calendario de helado', 70, 0);
let producto6 = new Producto('Poster de helado', 200, 0);

/*------------------------------ Creación de HTML desde JS ------------------------------*/
let contenedor = document.getElementById('productos');
const productos = [ {nombre: producto1.nombre, precio: producto1.precio},
                    {nombre: producto2.nombre, precio: producto2.precio},
                    {nombre: producto3.nombre, precio: producto3.precio},
                    {nombre: producto4.nombre, precio: producto4.precio},
                    {nombre: producto5.nombre, precio: producto5.precio},
                    {nombre: producto6.nombre, precio: producto6.precio}];
/*------------------------------ Creación de HTML desde JS ------------------------------*/


alert('Bienvenid@ al sistema de compras. A continuación podrá ver los productos que tenemos para ofrecerle. Presione aceptar para continuar.');

while(consultaProducto){
    alert(  'Producto 1:               ' + producto1.nombre + '               $' + producto1.precio + ' + IVA. ' +
            'Producto 2:               ' + producto2.nombre + '                    $' + producto2.precio + ' + IVA. ' +
            'Producto 3:               ' + producto3.nombre + '                      $' + producto3.precio + ' + IVA. ' +
            'Producto 4:               ' + producto4.nombre + '                    $' + producto4.precio + ' + IVA. ' +
            'Producto 5:               ' + producto5.nombre + '                     $' + producto5.precio + ' + IVA. ' +
            'Producto 6:               ' + producto6.nombre + '                          $' + producto6.precio + ' + IVA.');

    productoElegido = prompt ('Ingrese el número de producto que desea comprar.');

    switch(productoElegido){
        case "1":
            alert('El producto elegido es ' + producto1.nombre)
            producto1.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto1)
            break;
        case "2":
            alert('El producto elegido es ' + producto2.nombre)
            producto2.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto2)
            break;
        case "3":
            alert('El producto elegido es ' + producto3.nombre)
            producto3.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto3)
            break;
        case "4":
            alert('El producto elegido es ' + producto4.nombre)
            producto4.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto4)
            break;
        case "5":
            alert('El producto elegido es ' + producto5.nombre)
            producto5.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto5)
            break;
        case "6":
            alert('El producto elegido es ' + producto6.nombre)
            producto6.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto6)
            break;
        default:
            alert("El número ingresado no es válido");
            break;
    }

    let caracter = prompt ('¿Desea comprar otro producto? (Ingrese "1" para ingresar otro o "0" para terminar)');

    if(caracter == 0){
        // Calculo total de carrito sin IVA
        carrito.forEach(producto => {
            neto += (producto.precio * producto.cantidad);
        });

        // Agrego el IVA
        total = neto * iva;

        // Devuelvo el total
        alert(  '                                   El monto de la compra es:                                        ' +
                'Precio neto: $ ' + neto + 'Precio final: $ ' + total);
        // Cierro el ciclo
        consultaProducto=0;
    }else if(caracter != 1){
        alert("La opción ingresada no es válida");
    }
}

/*------------------------------ Creación de HTML desde JS ------------------------------*/
for(const producto of productos){
    let cartaDeProducto = document.createElement('article');
    cartaDeProducto.innerHTML = `   <h5>${producto.nombre}</h5>
                                    <p>$ ${producto.precio} + IVA</p>`;
    contenedor.appendChild(cartaDeProducto);
}
/*------------------------------ Creación de HTML desde JS ------------------------------*/