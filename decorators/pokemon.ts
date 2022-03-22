
function prinToConsole(constructor: Function){
    console.log(constructor);
}

const printToConsoleConditional = (print : boolean = false) : Function =>{
    if(print){
        return prinToConsole;
    }else {
        return ()=> {}
    }
}

@printToConsoleConditional(true)
export class Pokemon {
     public API: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ){

    }
}