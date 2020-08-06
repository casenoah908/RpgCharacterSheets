import { Requirements } from '../Requirements';
import { ClassTraitRequirements } from '../classTraitRequirements';


        let role: string = "Monk";

        let skills: Array<string> = ['2','Acrobatics','Athletics','History','Insight','Religion','Stealth'];

        let armors: Array<string> = [];
        let weapons: Array<string> = ['One shortsword','One simple weapon'];
        let secondWeapons: Array<string> = [];
        let packs: Array<string> = ["Dungeoneer's pack","Explorer's pack"];
        let others: Array<string> = [];

        // I might not need to make seperate popups for each class, but I will likely need different finalizing methods for each class
        let level1Traits: Array<ClassTraitRequirements> = [
            { header: "Unarmored Defense", description: "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.", choices: []},
            { header: "Martial Arts", description: "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property. You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield: You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table. When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn. Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in the Weapons section.", choices: []}  
        ];
        //make a seperate traits property for each level, containing whatever may be needed.
        // level2Traits: [
        //     {},
        //     {}
        // ]

export class MonkRequirements extends Requirements{
        constructor(){
            super(role, skills, armors, weapons, secondWeapons, packs, others, level1Traits); //add level 2-20 traits later
        }
}