class Book extends Media {
    constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages
    }
    
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckoutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());