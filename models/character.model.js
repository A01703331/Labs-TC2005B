const characters = [
    {
        charName: "Mario",
        charID: "mr"
    },
    {
        charName: "Luigi",
        charID: "lg"
    },
    {
        charName: "Peach",
        charID: "pc"
    },
    {
        charName: "Toad",
        charID: "kn"
    },
    {
        charName: "Yoshi",
        charID: "ys"
    },
    {
        charName: "Donkey Kong",
        charID: "dk"
    },
    {
        charName: "Wario",
        charID: "wr"
    },
    {
        charName: "Bowser",
        charID: "kp"
    }
];

module.exports = class Character {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(chara) {
        this.charName = chara.charName;
        this.charID = chara.charID;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        characters.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return characters;
    }
}