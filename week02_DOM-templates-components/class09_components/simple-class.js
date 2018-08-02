
    
// function Hotel(name, rooms, booked) {
//     this.name = name;
//     this.rooms = rooms;
//     this.booked = booked;
// }

// Hotel.prototype.checkAvailability = function() {
//     return this.rooms - this.booked;
// };

class Hotel {

    constructor(name, rooms, booked) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
    }

    checkAvailability() {
        return this.rooms - this.booked;
    }

    bookRoom() {
        this.booked = this.booked + 1;
    }
}

let ace = new Hotel('Ace', 112, 45);
let nines = new Hotel('Nines', 81, 27);

console.log('Ace', ace.checkAvailability());
console.log('Nines', nines.checkAvailability());

ace.bookRoom();
console.log('Ace', ace.checkAvailability());