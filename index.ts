import { Card } from './Card';
const myCard = new Card();

class NumberHolder {
    value: number
}
class StringHolder {
    value: string;
}
class BooleanHolder {
    value: boolean;
}

const numberHolder = new NumberHolder();
numberHolder.value = 10;
const stringHolder = new StringHolder();
stringHolder.value = 'A String';
const booleanHolder = new BooleanHolder();
booleanHolder.value = true;

class ValueHolder<TypeForValueProperty> {
    value: TypeForValueProperty;
}
const numHolder = new ValueHolder<number>();
numHolder.value;


const numberWrapper = (value: number): number[] => {
    return [value];
};
const stringWrapper = (value: string): string[] => {
    return [value];
};
const booleanWrapper = (value: boolean): boolean[] => {
    return [value];
};

const valueWrapper = <T>(value: T): T[] => {
    return [value];
}
valueWrapper<number>(10);
valueWrapper<boolean>(true);


interface Driveable {
    speed: number;
    drive(): string; // drive method returns a string
}

class Car implements Driveable {
    speed = 10;

    drive() {
        return `I am driving at ${this.speed}`
    }
}

const myCar = new Car();

const startDriving = (vehicle: Driveable) => {
    vehicle.drive();
}

startDriving(myCar);


interface Post {
    title: string,
    daysOld: number,
    published: Boolean,
}

let myName

if (1 === 1) {
    myName = 'Dev';;

} else {
    myName = 'dsafasfda'
}

const sentence = 'This is a sentence';

sentence.includes('is');


const add = (a: number, b: number): number => {
    return a + b;
};

const post: { title: string, daysOld: number, published: Boolean } = {
    title: 'New News!',
    daysOld: 10,
    published: true,
}

const printPost = (postToPrint: Post) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old.)`
}


// decorator
const Component = (target: any) => {
    console.log(target)

}

@Component
class Cart {
    // public means property can be accessed outside of class
    public color: string;
    // private means you can not access property outside of the class
    private year: number

    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }

    public drive() {
        console.log('Vroom');
        this.putInGear();
        this.pressPedal();
        this.turnWheel();
    }

    private putInGear() {
    }

    private pressPedal() {
    }

    private turnWheel() {
    }


}
const myCart = new Cart('red', 2000);
myCart.drive()
// myCar.putInGear() // " is private and only accessible within class 'Car'.
