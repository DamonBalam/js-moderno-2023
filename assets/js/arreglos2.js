let juegos = ['Zelda','Mario','Metroid','Kirby']
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

console.log({primero,ultimo});

juegos.forEach( (elemento,indice,arr) => {
    console.log({elemento,indice,arr});
})



let nuevaLongitud = juegos.push("Smash");
console.log({nuevaLongitud,juegos});

nuevaLongitud = juegos.unshift("Mario Party");
console.log({nuevaLongitud,juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado,juegos});

let pos = 1;

let juegosBorrados = juegos.splice(pos, 1);

console.log({juegosBorrados,juegos});


let metroid = juegos.indexOf('Metroid');
console.log({'MetroidIndex':metroid})


/* gg hoy no tuve chance de chambiar no hubo luz */
console.log({'MetroidIndex':metroid})
console.log({'MetroidIndex':metroid})
console.log({'MetroidIndex':metroid})
console.log({'MetroidIndex':metroid})
console.log({'MetroidIndex':metroid})
console.log({'MetroidIndex':metroid})
console.log({'MetroidIndex':metroid})
console.log({'MetroidIndex':metroid})
