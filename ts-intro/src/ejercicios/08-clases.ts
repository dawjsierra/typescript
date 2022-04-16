
class PersonaNormal{
    constructor(public nombre: string, public direccion: string){}
}

class Heroe extends PersonaNormal {
    constructor(public alterEgo: string, public edad: number, public nombreReal: string){

        super(nombreReal, 'New York, USA');
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
}

const ironman = new Heroe('IRONMAN', 33, 'Tony');

console.log(ironman);