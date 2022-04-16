
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal? : string; //el ? indica que el parametro es opcional
}

const personaje:Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter','Healing']
};

console.table(personaje) //para mostrar el resultado en una tabla