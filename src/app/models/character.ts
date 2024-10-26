export class Character {
    constructor(
        public name: string,
        public life: number,
        public items?: string[],
        public humor?: number
    ) { }
}

export class Ego extends Character {
    constructor(name: string, life: number, items: string[],humor: number) {
        super(name, life,items, humor)
    }
}

export class Npc extends Character{
    constructor(name: string, life: number){
        super(name,life)
    }
}


