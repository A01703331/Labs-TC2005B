const karts = [
    {
        kartName: "Pipeframe",
        kartID: "pf"
    },
    {
        kartName: "Wild Wing",
        kartID: "ww"
    },
    {
        kartName: "Blazing Eagle",
        kartID: "be"
    },
    {
        kartName: "Offroader",
        kartID: "or"
    },
    {
        kartName: "Egg 1",
        kartID: "tg"
    },
    {
        kartName: "Rambi Rider",
        kartID: "rb"
    },
    {
        kartName: "Badwagon",
        kartID: "bw"
    },
    {
        kartName: "Koopa King",
        kartID: "kk"
    }
];

module.exports = class Kart {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(karty) {
        this.kartName = karty.charName;
        this.kartID = karty.charID;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        karts.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return karts;
    }
}