
let bienvenida = alert("Bienvenido/a a nuestra tienda de camisetas de futbol retro")

let bandera = true
const camisetas = ["Milan", "Inter","Argentina","Arsenal","Manchester United", "Napoli"]
const talles = ["S","M","L","XL", "2XL"]
const mediosPago = ["Tarjeta de credito", "Transferencia", "Efectivo"]
let total = 0
let compra = []
let cantidad = 1

function sumaTotal (producto,precio ,cantidad = 1,){
    compra.push("se ha añadido " + cantidad + " camiseta de " + producto + "  a la compra")
    total += precio * cantidad
}


function transaccion(camiseta){
    cantidad = 1 
    switch(camiseta){
        case "milan":
            cantidad = prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar")
            sumaTotal (camiseta, 100 , cantidad)
                break;
        case "inter":
            cantidad = prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar")
            sumaTotal (camiseta, 120, cantidad)
                break;    
        case "argentina":
            cantidad = prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar")
            sumaTotal (camiseta, 100, cantidad)
                break;
        case "arsenal":
            cantidad = prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar")
            sumaTotal (camiseta, 100, cantidad)
                break;
        case "manchester united":
            cantidad = prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar")
            sumaTotal (camiseta, 100, cantidad)
                break;
        case "napoli":
            cantidad = prompt("indique la cantidad de camisetas del " + camiseta + " que desea comprar")
            sumaTotal (camiseta, 100, cantidad)
                break;
        default:
            alert("momentaneamente no tenemos camisetas de ese equipo")
                break            
    }
}

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

let compraTotal = alert(total)

alert(compra.join("\n"))

bandera = true

while(bandera){
    const  medioPago = prompt("Seleccione un medio de pago \n\n ■ " + mediosPago.join("\n ■ ")).toLocaleLowerCase()
    
    pago(medioPago)
    
    if(bandera){
        bandera = !confirm("desea cancelar la compra?")
    }
    
}