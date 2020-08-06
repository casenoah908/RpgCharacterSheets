import { Requirements } from '../Requirements';
import { ClassTraitRequirements } from '../classTraitRequirements';


let role: string = "Fighter";

let skills: Array<string> = ['2', 'Acrobatics', 'Animal Handling', 'Athletics',
    'History', 'Insight', 'Intimidation', 'Perception', 'Survival'];

let armors: Array<string> = ["Chain Mail", "Leather Armor and Longbow with 20 arrows"];

let weapons: Array<string> = ['One martial weapon and a shield', 'Two martial weapons'];

let secondWeapons: Array<string> = ['Light Crossbow and 20 bolts', 'Two handaxes'];

let packs: Array<string> = ["Dungeoneer's Pack", "Explorer's Pack"];

let others: Array<string> = [];
// I might not need to make seperate popups for each class, but I will likely need different finalizing methods for each class
let level1Traits: Array<ClassTraitRequirements> = [
    { header: 'Fighting Style', description: "You adopt a particular style of fighting as your specialty. Choose a Fighting Style from the list of optional features. You can't take the same Fighting Style option more than once, even if you get to choose again. Archery: You gain a +2 bonus to Attack rolls you make with Ranged Weapons. Defense: While you are wearing armor, you gain a +1 bonus to AC. Dueling: When you are wielding a melee weapon in one hand and no other Weapons, you gain a +2 bonus to Damage Rolls with that weapon. Great Weapon Fighting: When you roll a 1 or 2 on a damage die for an Attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the Two-Handed or Versatile property for you to gain this benefit. Protection: When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your Reaction to impose disadvantage on the Attack roll. You must be wielding a Shield. Two-Weapon Fighting: When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second Attack." ,  choices: ['Archery','Defense','Dueling','Great Weapon Fighting', 'Protection','Two-Weapon Fighting'] },
    { header: 'Second Wind', description: "You have a limited well of stamina that you can draw on to protect yourself from harm. On Your Turn, you can use a Bonus Action to regain Hit Points equal to 1d10 + your Fighter level. Once you use this feature, you must finish a short or Long Rest before you can use it again.", choices: [] }
];


export class FighterRequirements extends Requirements {

    constructor() {
        super(role, skills, armors, weapons, secondWeapons, packs, others, level1Traits); //add level 2-20 traits later
    }

}