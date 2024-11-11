// class ans object

class Car {
    // properties
    color;
    speed;

    // methods
    drive(){
        console.log("driving");
    }

    stop(){
        console.log("Stopping");
    }
}

//object
const c = new Car();
c.color = "red";
c.speed = 200;

console.log(c);
console.log(c.color);
console.log(c.speed);

c.drive();
c.stop();