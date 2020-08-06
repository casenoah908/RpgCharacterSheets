import { Requirements } from '../Requirements';
import { ClassTraitRequirements } from '../classTraitRequirements';


        let role: string = "Bard";
        
        let skills: Array<string> = ['3','Acrobatics','Animal Handling','Arcana','Athletics','Deception','History','Insight','Intimidation','Investigation','Medicine','Nature','Perception','Performance','Persuasion','Religion','Sleight of Hand','Stealth','Survival'];

        let armors: Array<string> = [];
        let weapons: Array<string> = ['One rapier','One Longsword','One simple weapon'];
        let secondWeapons: Array<string> = [];
        let packs: Array<string> = ["Diplomat's pack", "Entertainer's pack"];
        let others: Array<string> = ["Lute","Any other musical instrument"];

        // I might not need to make seperate popups for each class, but I will likely need different finalizing methods for each class
        let level1Traits: Array<ClassTraitRequirements> = [
            { header: "Bardic Inspiration", description: "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.", choices: []}
        ];
        //make a seperate traits property for each level, containing whatever may be needed.
        // level2Traits: [
        //     {},
        //     {}
        // ]

export class BardRequirements extends Requirements{
        constructor(){
            super(role, skills, armors, weapons, secondWeapons, packs, others, level1Traits); //add level 2-20 traits later
        }
}