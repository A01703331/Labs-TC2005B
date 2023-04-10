const db = require('../util/database');

module.exports = class Character {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(chara, weightClass) {
        var spd, acl, wt, hd, tc, mt
        switch(weightClass) {
            case 'Feather':
                spd = 2.5
                acl = 4
                wt = 2
                hd = 5
                tc = 4.25
                mt = 4
                break;
            case 'Feather Alt':
                spd = 2.5
                acl = 4.25
                wt = 2
                hd = 4.75
                tc = 3.75
                mt = 4
                break;
            case 'Light':
                spd = 2.75
                acl = 4.25
                wt = 2.25
                hd = 4.5
                tc = 4
                mt = 4
                break;
            case 'Super Light':
                spd = 3
                acl = 4
                wt = 2.5
                hd = 4.5
                tc = 4.25
                mt = 3.75
                break;
            case 'Super Light Alt':
                spd = 3
                acl = 4.25
                wt = 2.5
                hd = 4.25
                tc = 3.5
                mt = 3.75
                break;
            case 'Speedy':
                spd = 3.25
                acl = 4
                wt = 2.75
                hd = 4.25
                tc = 4
                mt = 3.75
                break;
            case 'Light Welter':
                spd = 3.5
                acl = 4
                wt = 2.75
                hd = 4
                tc = 3.75
                mt = 3.5
                break;
            case 'Welter':
                spd = 3.75
                acl = 3.75
                wt = 3
                hd = 3.75
                tc = 3.75
                mt = 3.75
                break;
            case 'Welter Alt':
                spd = 3.75
                acl = 3.75
                wt = 3.25
                hd = 3.75
                tc = 3.25
                mt = 3.5
                break;
            case 'Medium':
                spd = 4
                acl = 3.5
                wt = 3.5
                hd = 3.5
                tc = 3.5
                mt = 3.5
                break;
            case 'Medium Alt':
                spd = 4
                acl = 3.5
                wt = 3.5
                hd = 3.75
                tc = 3.25
                mt = 3.5
                break;
            case 'Light Cruiser':
                spd = 4.25
                acl = 3.25
                wt = 3.75
                hd = 3.25
                tc = 3.75
                mt = 3.25
                break;
            case 'Metal':
                spd = 4.25
                acl = 3.25
                wt = 4.5
                hd = 3.25
                tc = 3.25
                mt = 3
                break;
            case 'Cruiser':
                spd = 4.5
                acl = 3.25
                wt = 4
                hd = 3
                tc = 3
                mt = 3
                break;
            case 'Heavy':
                spd = 4.75
                acl = 3
                wt = 4.25
                hd = 2.75
                tc = 3.25
                mt = 2.75
                break;
            case 'Super Heavy':
                spd = 4.75
                acl = 3
                wt = 4.5
                hd = 2.5
                tc = 3
                mt = 2.75
                break;
        }
        this.name = chara.name;
        this.speed = spd;
        this.acceleration = acl;
        this.weight = wt;
        this.handling = hd;
        this.traction = tc;
        this.miniturbo = mt;
        this.image = chara.image;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO characters (name, speed, acceleration, weight, handling, traction, miniturbo, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [this.name, this.speed, this.acceleration, this.weight, this.handling, this.traction, this.miniturbo, this.image])
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetch(id) {
        return db.execute('SELECT * FROM characters WHERE charID = ?', [id]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM characters');
    }

    static countAll() {
        return db.execute('SELECT COUNT(*) FROM characters');
    }
}