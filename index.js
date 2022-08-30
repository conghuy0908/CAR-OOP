class rat {
    name;
    weight;
    speed;
    status;
    constructor(name, weight, speed,status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status=status;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    getSpeed(){
        return this.speed;
    }
    getStatus(){
        return this.status;
    }
    talk(sound){
        console.log(sound);
    }
}
class cat {
    name;
    weight;
    maxspeed;
    constructor(name, weight, maxspeed) {
        this.name = name;
        this.weight = weight;
        this.maxspeed = maxspeed;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    getMaxSpeed() {
        return this.maxspeed;
    }
    talk(sound) {
        console.log(sound);
    }
}
let Tom = new cat("Tom",20,50);
let Jerry = new rat("Jerry", 10, 30, true)
Tom.talk("Meo Meo");
Jerry.talk("Chít Chít");
function catchRat(rat) {
    if (this.speed > cat.speed) {
        return true;
    }
    return false;
}
function eatRat(rat) {
    if (rat.status) {
        rat.status = false;
        this.weight = cat.weight;
    }
}
