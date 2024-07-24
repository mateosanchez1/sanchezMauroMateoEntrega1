
let bandera = true
const camisetas = ["Milan", "Inter","Argentina","Arsenal","Manchester United", "Napoli"]
const talles = ["S","M","L","XL"]
const mediosPago = ["Tarjeta de credito", "Transferencia", "Efectivo"]
let total = 0
let compra = []
let cantidad = 1

const nombre = prompt("Por favor ingrese su nombre");

function bienvenida(nombres) {
    if (nombres === "" || nombres === null) { 
        alert("Ingrese su nombre por favor");
        bienvenida(prompt("Por favor ingrese su nombre"));
    } else {
        alert("Bienvenido " + nombres + " a nuestra tienda de camisetas retro");
    }
}

bienvenida(nombre);

function sumaTotal (producto,precio ,cantidad = 1,){
    compra.push("se ha añadido " + cantidad + " camiseta de " + producto + "  a la compra")
    total += precio * cantidad
}


function transaccion(camiseta){
    cantidad = 1 
    switch(camiseta){
        case "milan":
            cantidad = parseInt(prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar"))
            sumaTotal (camiseta, 100 , cantidad)
                break;
        case "inter":
            cantidad = parseInt(prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar"))
            sumaTotal (camiseta, 120, cantidad)
                break;    
        case "argentina":
            cantidad = parseInt(prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar"))
            sumaTotal (camiseta, 100, cantidad)
                break;
        case "arsenal":
            cantidad = parseInt(prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar"))
            sumaTotal (camiseta, 100, cantidad)
                break;
        case "manchester united":
            cantidad = parseInt(prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar"))
            sumaTotal (camiseta, 100, cantidad)
                break;
        case "napoli":
            cantidad = parseInt(prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar"))
            sumaTotal (camiseta, 100, cantidad)
                break;
        default:
            alert("momentaneamente no tenemos camisetas de ese equipo")
                break            
    }
}




// function seleccionTalle(talla){
//     switch(talla){
//         case "S":
//             break
//         case "M":
//             break
//         case "L":
//             break
//         case "XL":
//             break
//         default:
//             alert("Talle no disponible")
//             break
//     }
// }



function metodoPago(medio){
    if(medio === "efectivo"){
        alert("Acercarse a la tienda mas cercana a pagar")
        }
    alert("el total de compra es de " + total)
    bandera = !confirm("¿confirma la compra?")
}



function pago(medio){
    switch(medio){
        case "tarjeta de credito":
            metodoPago(medio)
                break;
        case "transferencia":
            metodoPago(medio)
                break;    
        case "efectivo":
            metodoPago(medio)
                break;
        default:
            alert("No disponemos del metodo de pago seleccionado")
                break            
    }
}




while(bandera){
    const equipoElegido = prompt("Disponemos camisetas de los siguientes equipos \n\n ■ " + camisetas.join("\n ■ ")).toLowerCase()

    transaccion(equipoElegido)

    bandera = confirm("¿Desea seguir comprando?")
}    

let compraTotal = alert( "El monto total de compra es de " + total)

alert(compra.join("\n"))

bandera = true

while(bandera){
    const  medioPago = prompt("Seleccione un medio de pago \n\n ■ " + mediosPago.join("\n ■ ")).toLocaleLowerCase()
    
    pago(medioPago)
    
    if(bandera){
        bandera = !confirm("desea cancelar la compra?")
    }
    
}