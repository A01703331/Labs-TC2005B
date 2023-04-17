const mysql = require('mysql2');
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
    
    static saveAndUseTransaction(playerBld, entries) {
        let entryInserts = "INSERT INTO races (raceID, buildID) VALUES ";
        let i=0;
        for (let entry of entries){
            i++;
            entryInserts += "("+entry[0]+","+entry[1]+")"
            if(i<entries.length){
                entryInserts += ", "
            } else {
                entryInserts += ";";
            }
        }

        db.getConnection().then(connection => {
            console.log("Connection established");
            connection.beginTransaction().then(() => {
                console.log("Transaction succesfully created");
                connection.execute('UPDATE builds SET uses = uses + 1 WHERE buildID = ?', [playerBld]).then(() => {
                    console.log("Succesfully updated number of build uses");     
                    connection.execute(entryInserts).then(() => {
                        console.log("Succesfully registered the race");
                        connection.commit().then(() => {
                            console.log("Transaction succesfully commited");
                            connection.release();
                        }).catch(err => {console.log(err); connection.rollback(() => {connection.release();});});
                    }).catch(err => {console.log(err); connection.rollback(() => {connection.release();});});
                }).catch(err => {console.log(err); connection.rollback(() => {connection.release();});});
            }).catch(err => {console.log(err); connection.rollback(() => {connection.release();});});
        }).catch(err => console.log(err));
    }
}