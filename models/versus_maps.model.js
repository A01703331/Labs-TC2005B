const db = require('../util/database');

module.exports = class Map {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(track) {
        this.mapID = track.mapID;
        this.cupID = track.cupID;
        this.name = track.name;
        this.link = track.link;
        this.preview = track.preview;
    }

    //Este método guarda de manera persistente el nuevo objeto. (No creo que lo use)
    save() {
        return db.execute('CALL saveNewTrack(?, ?, ?, ?, ?)',
        [this.mapID, this.cupID, this.name, this.link, this.preview])
    }

    //Este método recupera el link de la música del mapa especificado.
    static get_Link(map) {
        return db.execute('CALL get_Link(?)',
        [map])
    }

    //Este método sirve para devolver las pistas de una copa.
    static fetchCupTracks(cup) {
        return db.execute('CALL fetchCupTracks(?)',
        [cup]);
    }

    //Este método sirve para devolver los mapas del modo versus.
    static fetchVersus() {
        return db.execute('SELECT * FROM tracks WHERE cupID > 0 ORDER BY mapID ASC');
    }

    //Este método sirve para devolver los mapas del modo de batalla.
    static fetchBattle() {
        return db.execute('SELECT * FROM tracks WHERE cupID = 0 ORDER BY mapID ASC');
    }

    //Este método devuelve las copas del modo versus.
    static fetchCups() {
        return db.execute('SELECT * FROM cups WHERE cupID > 0 ORDER BY cupID ASC');
    }

    //Este método servirá para devolver todos los objetos mapas de la BD.
    static fetchAll() {
        return db.execute('SELECT * FROM tracks');
    }
}