const battle_maps = [
    {
        mapName: "Battle Course 1",
        mapID: "bc"
    },
    {
        mapName: "Big Donut",
        mapID: "bd"
    },
    {
        mapName: "Cookie Land",
        mapID: "cl"
    },
    {
        mapName: "Palm Shore",
        mapID: "ps"
    },
    {
        mapName: "Delfino Pier",
        mapID: "dp"
    },
    {
        mapName: "Wuhu Town",
        mapID: "wt"
    },
    {
        mapName: "Lunar Colony",
        mapID: "lc"
    },
    {
        mapName: "New York Minute B",
        mapID: "ny"
    }
];

module.exports = class BattleMap {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(bmap) {
        this.mapName = bmap.charName;
        this.mapID = bmap.charID;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        battle_maps.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return battle_maps;
    }
}