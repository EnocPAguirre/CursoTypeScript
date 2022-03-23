import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon('Charmander');

(Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander.savePodemonToDB(1));

console.log(charmander)