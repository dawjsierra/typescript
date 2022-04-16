
function sumar (a: number, b: number): number{
    return a+b;
}

//funcion de flechas

const sumarFlecha = (a: number, b: number):number => {
    return a + b;
}

//es buena práctica poner el retorno en dos puntos despues de un metodo, en este caso number
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}




interface PersonajeLOR{
    nombre: string,
    pvida: number;
    mostrarHp: () => void;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pvida: 50,
    mostrarHp(){
        console.log('PUNTOS DE VIDA: ', this.pvida);
    }
};

function curar(personaje: PersonajeLOR, curarX: number): void{
    personaje.pvida += curarX;
}

curar (nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();