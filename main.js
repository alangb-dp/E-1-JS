const pizza = [
    {
        id: 30,
        nombre: "q jamone",
        ingredientes: ["muzarella", "huevo", "roquefort", "napolitana", "triple queso", "jamon"],
        precio: 350
    },

    {
        id: 7,
        nombre: "la charly garcia",
        ingredientes: ["muzarella", "huevo", "roquefort", "napolitana", "triple queso", "jamon"],
        precio: 500
    },

    {
        id: 13,
        nombre: "la maradona",
        ingredientes: ["muzarella", "huevo", "roquefort", "napolitana", "triple queso", "jamon"],
        precio: 650
    },

    {
        id: 20,
        nombre: "leo messi",
        ingredientes: ["muzarella", "huevo", "roquefort", "napolitana", "triple queso", "jamon"],
        precio: 490

    },

    {
        id: 17,
        nombre: "picantovich",
        ingredientes: ["muzarella", "huevo", "roquefort", "napolitana", "triple queso", "jamon"],
        precio: 330
    },
 
    {
        id: 4,
        nombre: "mc bin laden",
        ingredientes: ["muzarella", "huevo", "roquefort", "napolitana", "triple queso", "jamon"],
        precio: 700
    }

];


console.log("- - - EJERCICIO A - - -");

const Idimpar = pizza.forEach((pizza) =>{
    if (pizza.id % 2 !==0){
        console.log(`la pizza ${pizza.nombre} tiene un id impar`)
    }
});

console.log("- - - EJERCICIO B - - -")

const valorMenorA600 = pizza.some(pizza => pizza.precio < 600)
// console.log(`¿hay alguna pizza menor a 600?: ${valorMenorA600}`);
const mensajeAmigable = valorMenorA600
const msj = (mensajeAmigable) ? "Si tenemos pizzas de menor a 600" : "No tenemos pizzas de menor a 600"
console.log(msj)

console.log("- - - EJERCICIO C - - -")

const listaDePizzas = pizza.forEach((pizza)=>{
    console.log(`la pizza ${pizza.nombre} tiene un valor de: ${pizza.precio}`)
})

console.log("- - - EJERCICIO D - - -")

const pizzaNombre = pizza.find(elemento => {
    return elemento.nombre = "q jamone"
});
console.log (pizzaNombre)

// Ejercicio D, no comprendi. no entiendo de que manera tengo que unir esos dos recorridos diferentes











