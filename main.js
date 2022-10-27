const pizzas = [
    {
        id: 30,
        nombre: "q jamone",
        ingredientes: ["jamon especial", "borde relleno"],
        precio: 350
    },

    {
        id: 7,
        nombre: "la charly garcia",
        ingredientes: ["muzarella"],
        precio: 500
    },

    {
        id: 13,
        nombre: "la maradona",
        ingredientes: ["morron", "huevo", "jamon"],
        precio: 650
    },

    {
        id: 20,
        nombre: "leo messi",
        ingredientes: ["muzarella", "huevo", "morron"],
        precio: 490

    },

    {
        id: 17,
        nombre: "picantovich",
        ingredientes: ["picante", "huevo", "roquefort"],
        precio: 330
    },
 
    {
        id: 4,
        nombre: "mc bin laden",
        ingredientes: ["muzarella", "huevo", "roquefort"],
        precio: 700
    }

];


console.log("- - - EJERCICIO A - - -");

const Idimpar = pizzas.forEach((pizza) =>{
    if (pizza.id % 2 !==0){
        console.log(`la pizza ${pizza.nombre} tiene un id impar`)
    }
});

console.log("- - - EJERCICIO B - - -")

const valorMenorA600 = pizzas.some(pizza => pizza.precio < 600)
// console.log(`¿hay alguna pizza menor a 600?: ${valorMenorA600}`);
const mensajeAmigable = valorMenorA600
const msj = (mensajeAmigable) ? "Si tenemos pizzas de menor a 600" : "No tenemos pizzas de menor a 600"
console.log(msj)

console.log("- - - EJERCICIO C - - -")

const listaDePizzas = pizzas.forEach((pizza)=>{
    console.log(`la pizza ${pizza.nombre} tiene un valor de: ${pizza.precio}`)
})

console.log("- - - EJERCICIO D - - -")

const pizzasConIngredientes = pizzas.forEach((pizza) =>{
    console.log(`La pizza ${pizza.nombre} tiene los siguientes ingredientes:`)
    pizza.ingredientes.forEach ((ingrediente, index) => {
        console.log(`Ingrediente Nro ${index + 1}: ${ingrediente}`)
    })
})