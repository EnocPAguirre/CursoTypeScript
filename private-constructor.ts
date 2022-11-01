class Apocalipsis {
  static instance: Apocalipsis;

  private constructor(public name: string){

  }

  static callApocalipsis(): Apocalipsis{
    if(!Apocalipsis.instance) {
      Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el unico');
    }

    return Apocalipsis.instance;
    
  }


const apocalipsis = Apocalipsis.callApocalipsis();
const apocalipsis = Apocalipsis.callApocalipsis();
}

// En todas será la misma instancia pero tambien se puede agregar alguna instancia para modificar
// el tipo de retorno

