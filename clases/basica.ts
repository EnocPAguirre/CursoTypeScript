class Avenger {

  private name: string;
  public team : string;
  public realName: string;

  static avgAge: number = 35; 
  // Para acceder al valor se acceder directo a la clase y no mediente la isntancias

  Avenger(name: string, team: string, realName?: string){
	  this.name = name;
	  this.team = team;
	  this.realName = realName;
  }

  const IronMan: Avenger = new Avenger("Iron Man", "Iron Man");

  // Con el operador ? no es obligatorio que venga


}


// Existe una manera de simplificarlo

class Auto {


  constructor(
    private model: string, 
    public brand: string, 
    public year: string
  ){}

  const Lobo: Auto  = new Auto('Lobo', 'Ford', '2020');

}
