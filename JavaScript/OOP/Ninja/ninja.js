class Ninja{
    constructor(name,health,speed=3,strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength =strength;

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

class Sensei extends Ninja{
    constructor(name,health=200,speed=10,strength=10){
        super(name,health,speed,strength);
        this.wisdom=10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();