const db = require('../util/database');

module.exports = class Kart {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(karty) {
        this.kartID = karty.kartID;
        this.kartType = karty.kartType;
        this.name = karty.name;
        this.speed = karty.speed;
        this.acceleration = karty.acceleration;
        this.weight = karty.weight;
        this.handling = karty.handling;
        this.traction = karty.traction;
        this.miniturbo = karty.miniturbo;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO karts (kartID, kartType, name, speed, acceleration, weight, handling, traction, miniturbo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [this.kartID, this.kartType, this.name, this.speed, this.acceleration, this.weight, this.handling, this.traction, this.miniturbo])
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM karts');
    }

    static fetchByID(id) {
        return db.execute('SELECT * FROM karts WHERE kartID = ?', [id]);
    }

    static fetchByName(nm) {
        return db.execute('SELECT * FROM karts WHERE name = ?', [nm]);
    }
}