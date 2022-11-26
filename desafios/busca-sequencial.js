let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());

for(let i=0; i<elementos.length; i++) {
    if(elementos[i] == valor) {
        print(`Achei ${valor} na posicao ${i}`)
    } else {
        print(`Numero ${valor} nao encontrado!`)
    }
}