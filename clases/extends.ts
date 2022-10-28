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

get fullName(){
  return `${this.name}`
}

set fullName(name: string){
  this.name = name;
}

const wolverine = new Xmen('Wolverine', 'Logan', true)
wolverine.getFullName()
