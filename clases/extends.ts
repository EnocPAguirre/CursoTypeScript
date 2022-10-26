class Avenger {
  constructor(
    public name: string,
    public realName: string
  ){
    console.log('Constructor')
  }
  protected getFullName(){
    return `${this.name} ${this.realName}` 
  }
}

class Xmen extends Avenger {
  constructor(
    name: string,
    realName: string,
    public isMutan: boolean){
    super(name, realName);
    console.log('Constructor Xmen')
  }
}

const wolverine = new Xmen('Wolverine', 'Logan', true)
wolverine.getFullName()
