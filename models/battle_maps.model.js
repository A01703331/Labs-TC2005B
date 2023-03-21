const battle_maps = [
    {
        mapName: "Battle Course 1",
        mapID: "01"
    },
    {
        mapName: "Big Donut",
        mapID: "02"
    },
    {
        mapName: "Cookie Land",
        mapID: "03"
    },
    {
        mapName: "Palm Shore",
        mapID: "04"
    },
    {
        mapName: "Delfino Pier",
        mapID: "05"
    },
    {
        mapName: "Wuhu Town",
        mapID: "06"
    },
    {
        mapName: "Lunar Colony",
        mapID: "07"
    },
    {
        mapName: "New York Minute B",
        mapID: "08"
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