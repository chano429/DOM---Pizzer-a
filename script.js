let productoSeleccionado;

class Pizza {
    constructor (id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const mozarella = new Pizza(1,"Mozzarella",200)
const margarita = new Pizza(2,"Margarita", 300)
const especial = new Pizza(3,"Especial",350)

const pizzas = [mozarella, margarita, especial]

const carrito = []

const tituloDiv = document.getElementById("tituloDiv")

console.log(tituloDiv)

const saludar = () =>{
    alert("Pizzeria");
    
}

const consultarPizza =() => {
    let texto = ""
    for (let p of pizzas){
        texto += `${p.id} ${p.nombre}\n`;
    }
    let pizza = parseInt(prompt(`Elige una Pizza!\n ${texto}`))
    while(isNaN(pizza) || pizza <1 || pizza >3){
        pizza = parseInt(prompt(`Elige una Pizza!\n ${texto}`))
    }
    return pizza;
}


const llevarPizza = () => {
    let buscarPizza = pizzas.find((element) => element.id === pizzaSeleccionada);
    console.log(buscarPizza);

    let existe = carrito.some(element => element.id === buscarPizza.id);
    console.log(existe)

    if(existe){
        carrito.map(element =>{
            if (element.id === buscarPizza.id){
                element.cantidad++;
                return element;
            } 
        });
    } else{
        buscarPizza.cantidad = 1;
        carrito.push(buscarPizza);
    }

    let seguir = confirm("Desea llevar otra Pizza?");
    if(seguir) {
        pizzaSeleccionada = consultarPizza();
        llevarPizza();
    }
};

const mostrarPizzas = () => {
    let divCaja = document.createElement("div");
    divCaja.className = "caja";
    tituloDiv.appendChild(divCaja);

    carrito.forEach(element =>{
        divCaja.innerHTML += `<div class="cajita"
        <h3>NOMBRE ${element.nombre}</h3>
        <h3>PRECIO $${element.precio}</h3>
        <h3>Subtotal $${element.precio * element.cantidad}</h3>
        <h3>CANTIDAD ${element.cantidad}</h3>
        </div>`
    });
};

const calcularTotal = () =>{
    let total = carrito.reduce((acum, iterador) => acum + (iterador.cantidad * iterador.precio), 0);
    document.body.innerHTML +=`<div class= "cajita"><h1>TOTAL ${total}</h1></div>`;
};



saludar();
pizzaSeleccionada = consultarPizza();
llevarPizza();
mostrarPizzas();
calcularTotal();

