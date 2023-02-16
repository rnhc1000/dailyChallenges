/*
*
* Book Availability 
* @param getAvailability() -> out of stock if o availabe copies
* low stock if < 10 copies
* in stock otherwise
* sell(numSold)
* restock(numCopies)
*/


class BookStore {

    constructor(numOfCopies, numSold) {
        this.numOfCopies = numOfCopies;
        this.numSold = numSold;
    }

    get numOfCopies() { return this.numOfCopies; }

}

let books = {
    'Book1':{
        Title: "Book1",
        Author: "Ricardo Ferreira",
        ISBN: "123456789",
        numOfCopies: 10
    },

    'Book2':{
        Title: "Book2",
        Author: "Ricardo Ferreira",
        ISBN: "987654321",
        numOfCopies: 10
    }



};

let person = {
    firstName: 'John',
    lastName: 'Doe'
};
