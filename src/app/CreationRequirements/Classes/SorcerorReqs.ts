import { Requirements } from '../Requirements';
import { ClassTraitRequirements } from '../classTraitRequirements';


let role: string = "Sorceror";

let skills: Array<string> = ['2', 'Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion'];

let armors: Array<string> = [];

let weapons: Array<string> = ['One light crossbow and 20 bolts','One simple weapon'];

let secondWeapons: Array<string> = [];

let packs: Array<string> = ["Dungeoneer's Pack", "Explorer's Pack"];

let others: Array<string> = ['Component pouch','Arcane focus'];
// I might not need to make seperate popups for each class, but I will likely need different finalizing methods for each class
let level1Traits: Array<ClassTraitRequirements> = [
    { header: 'Sorcerous Origin', description: "Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline, detailed at the end of the class description, or one from another source. Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.", choices: ["Draconic Bloodline","Wild Magic"] },
];
//make a seperate traits property for each level, containing whatever may be needed.
// level2Traits: [
//     {},
//     {}
// ]

export class SorcerorRequirements extends Requirements {

    constructor() {
        super(role, skills, armors, weapons, secondWeapons, packs, others, level1Traits); //add level 2-20 traits later
    }

}