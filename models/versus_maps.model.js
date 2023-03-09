const versus_maps = [
    {
        mapName: "Mario Circuit",
        mapID: "mc"
    },
    {
        mapName: "Coconut Mall",
        mapID: "cm"
    },
    {
        mapName: "Singapore Speedway",
        mapID: "ss"
    },
    {
        mapName: "Toad's Factory",
        mapID: "kf"
    },
    {
        mapName: "Yoshi's Island",
        mapID: "yi"
    },
    {
        mapName: "DK Summit",
        mapID: "ds"
    },
    {
        mapName: "Bowser's Castle",
        mapID: "kc"
    },
    {
        mapName: "Rainbow Road",
        mapID: "rr"
    }
];

module.exports = class VersusMap {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(vmap) {
        this.mapName = vmap.charName;
        this.mapID = vmap.charID;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        versus_maps.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return versus_maps;
    }
}