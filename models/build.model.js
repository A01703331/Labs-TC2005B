const db = require('../util/database');

module.exports = class Build {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(character, kart) {
        
        this.charID = character.charID;
        this.kartID = kart.kartID;
        this.speed = character.speed + kart.speed;
        this.acceleration = character.acceleration + kart.acceleration;
        this.weight = character.weight + kart.weight;
        this.handling = character.handling + kart.handling;
        this.traction = character.traction + kart.traction;
        this.miniturbo = character.miniturbo + kart.miniturbo;
    }

    //Este método servirá para guardar de manera persistente la nueva combinación. 
    save() {
        return db.execute('INSERT INTO builds (charID, kartID, uses, speed, acceleration, weight, handling, traction, miniturbo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [this.charID, this.kartID, 1, this.speed, this.acceleration, this.weight, this.handling, this.traction, this.miniturbo])
    }

    //Este método servirá para obtener si la combinación ya existe en la BD
    static exists(character, kart) {
        return db.execute('SELECT buildID FROM builds B WHERE B.charID = ? AND B.kartID = ?',
        [character.charID, kart.kartID]);
    }

    //Si la combinación existe se le agregará un 1 a su numero de usos
    static addUseCount(id) {
        return db.execute('UPDATE builds SET uses = uses + 1 WHERE buildID = ?',
        [id]);
    }

    static countBuilds() {
        return db.execute('SELECT COUNT(*) as "amount" from builds');
    }

    static fetchBuild(id) {
        return db.execute('SELECT C.image as "character", K.name as "kart" from builds B, characters C, karts K WHERE B.charID = C.charID AND B.kartID = K.kartID AND B.buildID = ?',
        [id]);
    }
}