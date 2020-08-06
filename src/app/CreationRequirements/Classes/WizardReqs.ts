import { Requirements } from '../Requirements';
import { ClassTraitRequirements } from '../classTraitRequirements';


let role: string = "Wizard";

let skills: Array<string> = ['2', 'Arcana', 'History','Insight','Investigation','Medicine','Religion'];

let armors: Array<string> = [];

let weapons: Array<string> = ['One quarterstaff','One dagger'];

let secondWeapons: Array<string> = [];

let packs: Array<string> = ["Explorer's Pack", "Scholar's Pack"];

let others: Array<string> = ['Component pouch','Arcane focus'];
// I might not need to make seperate popups for each class, but I will likely need different finalizing methods for each class
let level1Traits: Array<ClassTraitRequirements> = [
    { header: 'Arcane Recovery', description: "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.", choices: []}
];
//make a seperate traits property for each level, containing whatever may be needed.
// level2Traits: [
//     {},
//     {}
// ]

export class WizardRequirements extends Requirements {

    constructor() {
        super(role, skills, armors, weapons, secondWeapons, packs, others, level1Traits); //add level 2-20 traits later
    }

}