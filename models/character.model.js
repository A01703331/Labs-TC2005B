const db = require('../util/database');

module.exports = class Character {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(chara) {
        var spd, acl, wt, hd, tc, mt
        switch(weightClass) {
            case 'Feather':
                spd = 2.5
                acl = 4
                wt = 2
                hd = 5
                tc = 4.25
                mt = 4
                break
            case 'Feather Alt':
                spd = 2.5
                acl = 4.25
                wt = 2
                hd = 4.75
                tc = 3.75
                mt = 4
            case 'Light':
                spd = 2.75
                acl = 4.25
                wt = 2.25
                hd = 4.5
                tc = 4
                mt = 4
            case 'Super Light':
                spd = 2.75
                acl = 4.25
                wt = 2.25
                hd = 4.5
                tc = 4
                mt = 4
            case 'Super Light Alt':
                spd = 2.75
                acl = 4.25
                wt = 2.25
                hd = 4.5
                tc = 4
                mt = 4
            case 'Speedy':
                spd = 2.75
                acl = 4.25
                wt = 2.25
                hd = 4.5
                tc = 4
                mt = 4
            case 'Light Welter':
                spd = 2.75
                acl = 4.25
                wt = 2.25
                hd = 4.5
                tc = 4
                mt = 4
        }
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