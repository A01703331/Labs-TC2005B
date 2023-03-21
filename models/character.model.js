const db = require('../util/database');

module.exports = class Character {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(chara) {
        this.charID = chara.charID;
        this.name = chara.name;
        this.speed = chara.speed;
        this.acceleration = chara.acceleration;
        this.weight = chara.weight;
        this.handling = chara.handling;
        this.traction = chara.traction;
        this.miniturbo = chara.miniturbo;
        this.image = chara.image;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO characters (charID, name, speed, acceleration, weight, handling, traction, miniturbo, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [this.charID, this.name, this.speed, this.acceleration, this.weight, this.handling, this.traction, this.miniturbo, this.image])
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM characters');
    }
}