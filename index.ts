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

class Car {
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
const myCar = new Car('red', 2000);
myCar.drive()
// myCar.putInGear() // " is private and only accessible within class 'Car'.