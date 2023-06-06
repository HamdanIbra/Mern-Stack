class Ninja{
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength =3;

    }

    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("Hello my name is : "+this.name,"health : "+this.health,"speed : " + this.speed,"strenth : "+this.strength);
    }
    drinkSake(){
        this.health +=10;
    }
}

const ninja1 = new Ninja("Hyabusa",5);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
