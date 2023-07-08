class Rocola {

    temas = [
        'Stairaway to Heaven',
        'Light my Fire',
        'No me dejan salir',
        'Persiana Americana',
        'Eres',
        'Strobe',
        'Bangarang',
        'Te recuerdo Amanda'
    ];

    queue = [];

    play(k) {
        if (this.queue.length >= k) {
           let primero = this.queue.shift();
           this.temas.push(primero);
        }
        let indiceRandom = Math.floor(Math.random() * this.temas.length);
        let tema = this.temas.splice(indiceRandom, 1)[0];
        this.queue.push(tema);
        return tema;
    }
}

let rocola = new Rocola();
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));