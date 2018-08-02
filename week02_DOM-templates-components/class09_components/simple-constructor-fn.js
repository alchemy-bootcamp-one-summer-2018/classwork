let pojoHotel = {
    name: 'Pojo Hotel',
    rooms: 12,
    booked: 9,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};
    
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
}

Hotel.prototype.checkAvailability = function() {
    return this.rooms - this.booked;
};

let hotel = new Hotel('fake', 12, 3);

console.log(pojoHotel.name, pojoHotel.checkAvailability());
console.log(hotel.name, hotel.checkAvailability());