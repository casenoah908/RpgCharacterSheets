import { Requirements } from '../Requirements';
import { ClassTraitRequirements } from '../classTraitRequirements';


        let role: string = "Barbarian";

        let skills: Array<string> = ['2','Animal Handling','Athletics','Intimidation','Nature','Perception','Survival'];

        let armors: Array<string> = [];

        let weapons: Array<string> = ['One greataxe','One martial weapon'];

        let secondWeapons: Array<string> = ['Two handaxes','One simple weapon'];

        let packs: Array<string> = [];

        let others: Array<string> = [];
        // I might not need to make seperate popups for each class, but I will likely need different finalizing methods for each class
        let level1Traits: Array<ClassTraitRequirements> = [
            { header: "Rage", description: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren’t wearing heavy armor: You have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can’t cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.", choices: []},
            { header: "Unarmored Defense", description: "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.", choices: []}
        ];
        //make a seperate traits property for each level, containing whatever may be needed.
        // level2Traits: [
        //     {},
        //     {}
        // ]

export class BarbarianRequirements extends Requirements{
        constructor(){
            super(role, skills, armors, weapons, secondWeapons, packs, others, level1Traits); //add level 2-20 traits later
        }
}