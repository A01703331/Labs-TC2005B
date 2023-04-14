const db = require('../util/database');

module.exports = class Race {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(rcID,bld) {
        this.raceID = rcID;
        this.buildID = bld;
    }

    //Este método sirve para registrar cada combinación participante a una carrera. 
    save() {
        return db.execute('INSERT INTO races (raceID, buildID) VALUES (?, ?)',
        [this.raceID, this.buildID])
    }

    //Este método sirve para contar la cantidad de carreras o batallas registradas en la BD, para 
    static countRaces() {
        return db.execute('SELECT COUNT(DISTINCT raceID) as "raceAmount" from races');
    } 
}