export class Card {
    year: number;

    constructor() {
        this.year = 10
    }

    drive(speed: number) {
        console.log(`Driving at ${speed}`);
    }
}


const myCard = new Card();
console.log(myCard.year); // undefined