class CD extends Media {
    constructor(artist, title, songs){
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist(){
        return this._artist;
    }

    get songs(){
        return this._songs;
    }
  
}