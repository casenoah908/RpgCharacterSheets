import { Requirements } from '../Requirements';
import { ClassTraitRequirements } from '../classTraitRequirements';


let role: string = "Warlock";

let skills: Array<string> = ['2', 'Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion'];

let armors: Array<string> = [];

let weapons: Array<string> = ['One light crossbow and 20 bolts', 'One simple weapon'];

let secondWeapons: Array<string> = [];

let packs: Array<string> = ["Dungeoneer's Pack", "Scholar's Pack"];

let others: Array<string> = ['Component pouch','Arcane focus'];
// I might not need to make seperate popups for each class, but I will likely need different finalizing methods for each class
let level1Traits: Array<ClassTraitRequirements> = [
    { header: 'Otherworldly Patron', description: "At 1st level, you have struck a bargain with an otherworldly being of your choice: the Fiend, which is detailed at the end of the class description, or one from another source. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.", choices: ["The Fiend","Archfey","Great Old One"] },
];
//make a seperate traits property for each level, containing whatever may be needed.
// level2Traits: [
//     {},
//     {}
// ]

export class WarlockRequirements extends Requirements {

    constructor() {
        super(role, skills, armors, weapons, secondWeapons, packs, others, level1Traits); //add level 2-20 traits later
    }

}