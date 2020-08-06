import { Requirements } from '../Requirements';
import { ClassTraitRequirements } from '../classTraitRequirements';


let role: string = "Rogue";

let skills: Array<string> = ['4', 'Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth'];

let armors: Array<string> = [];
let weapons: Array<string> = ['One rapier', 'One shortsword'];
let secondWeapons: Array<string> = ['One shortbow and 20 arrows', 'One shortsword'];
let packs: Array<string> = ["Burglar's Pack", "Dungeoneer's pack", "Explorer's pack"];
let others: Array<string> = [];

let level1Traits: Array <ClassTraitRequirements> = [
    { header: "Expertise", description: "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit.", choices: ['chosen proficiencies','chosen proficiencies','chosen proficiencies'] },
    { header: "Sneak Attack", description: "Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.", choices: []},
    { header: "Thieves' Cant", description: "During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.", choices: []}
];
// I might not need to make seperate popups for each class, but I will likely need different finalizing methods for each class


//make a seperate traits property for each level, containing whatever may be needed.
// level2Traits: [
//     {},
//     {}
// ]

export class RogueRequirements extends Requirements {

    constructor() {
        super(role, skills, armors, weapons, secondWeapons, packs, others, level1Traits); //add level 2-20 traits later
    }


}