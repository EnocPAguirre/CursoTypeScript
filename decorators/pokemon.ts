
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

const bloquearPrototipo = function(constructor: Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


function checkValidPodemon(){
    return function(target: any, propertyKey:string, descriptor: PropertyDescriptor){

        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if(id < 1 || id> 800){
                return console.error('Error')
            } else {
                return originalMethod(id)
            }
        }
    }
}

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
     public API: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ){

    }

    @checkValidPodemon()
    savePodemonToDB(id : number){
        console.log('Pokemon guardado en base de datos', id);

    }
}