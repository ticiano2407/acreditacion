let bandas = ["Miranda", "Pearl Jam", "AC/DC", "Metallica", "Pink Floyd", 
    "The Beatles", "Led Zeppelin", "The Rolling Stones", 
    "Queen", "The Doors"];
console.log("Tercer elemento: " + bandas[2]);
console.log("Cuarto elemento: " + bandas[3]);
console.log("Séptimo elemento: " + bandas[6]);
bandas[1] = "Radiohead";
bandas[2] = "Foo Fighters";
console.log("Array modificado: ");
console.log(bandas);
bandas.push("Imagine Dragons");
console.log("actualizado un elemento del Array: ");
console.log(bandas);
console.log("La longitud del arreglo es: " + bandas.length);
bandas.sort();
console.log("Array ordenado alfabéticamente: ");
console.log(bandas);
console.log("Recorriendo el array con un bucle FOR:");
for (let i = 0; i < bandas.length; i++) {
console.log(bandas[i]);
}
