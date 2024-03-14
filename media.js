class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings =[];
    }

    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }

    toggleCheckoutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating(){
        const avg = this._ratings;
        const sum = avg.reduce((accumulator, currentValue) => accumulator + currentValue,0);
        return sum / avg.length;
    }

    addRating(rating){
        this._ratings.push(rating);
    }
}



