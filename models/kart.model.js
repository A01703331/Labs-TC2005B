const db = require('../util/database');

module.exports = class Kart {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(karty) {
        this.kartID = kart.kartID;
        this.kartType = kart.kartType;
        this.name = kart.name;
        this.speed = kart.speed;
        this.acceleration = kart.acceleration;
        this.weight = kart.weight;
        this.handling = kart.handling;
        this.traction = kart.traction;
        this.miniturbo = kart.miniturbo;
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
}