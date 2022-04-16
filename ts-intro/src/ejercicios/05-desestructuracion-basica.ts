interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anyo: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 35,
    cancion: 'Mess',
    detalles: {anyo: 1998, autor: 'U2'}
}

const { segundo, cancion, detalles:{autor: autor2} } = reproductor

// console.log('VOLUMEN ACTUAL: ', reproductor.volumen);
// console.log('SEGUNDO ACTUAL: ', segundo);
// console.log('AUTOR ACTUAL: ', autor2);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = dbz;

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 3:', p3);