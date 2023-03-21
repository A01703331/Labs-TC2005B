const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    
    constructor(user) {
        this.name = user.name || 'Sebastian';
        this.username = user.username || 'ML';
        this.password = user.password || 'GoGoPowerRangers';
    }

    save() {
        return bcrypt.hash(this.password, 12)
        .then((cypher) => {
            return db.execute(`
                INSERT INTO user (username, name, password)
                VALUES (?, ?, ?)
            `, [this.username, this.name, cypher]);
        })
        .catch((error) => { console.log(error) });
    }

    static fetchOne(username) {
        return db.execute(`
            SELECT * 
            FROM users
            WHERE username = ?
        `, [username]);
    }

    static fetchPerks(username) {
        return db.execute(`
            SELECT p.name
            FROM users u, user_role ur, roles r, role_perk rp, perks p
            WHERE u.id = ur.userID AND ur.roleID = r.id AND rp.roleID = r.id
            AND rp.perkID = p.id AND u.username = ?
        `, [username]);
    }
}