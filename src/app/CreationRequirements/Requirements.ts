import {ClassTraitRequirements} from './classTraitRequirements';

export class Requirements{
    // class is changed to role
    role: string;
    skills : Array<string>;
    armors : Array<string>;
    weapons : Array<string>;
    secondWeapons : Array<string>; //Maybe we could just tag this to weapons one and manually know where the stopping point is.
    packs : Array<string>;
    others : Array<string>;
    level1Traits: Array<ClassTraitRequirements>;
    // level2Traits: Array<ClassTraitRequirements>;

    constructor(role: string, skills: Array<string>, armors: Array<string>, weapons: Array<string>, secondWeapons: Array<string>, packs: Array<string>, others: Array<string>, level1Traits: Array<ClassTraitRequirements>){

            this.role = role;
            this.skills = skills;
            this.armors = armors;
            this.weapons = weapons;
            this.secondWeapons = secondWeapons;
            this.packs = packs;
            this.others = others;
            this.level1Traits = level1Traits;
    }

}