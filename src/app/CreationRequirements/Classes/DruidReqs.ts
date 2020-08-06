import { Requirements } from '../Requirements';
import { ClassTraitRequirements } from '../classTraitRequirements';


        let role: string = "Druid";

        let skills: Array<string> = ['2','Arcana','Animal Handling','Insight','Medicine','Nature','Perception','Religion','Survival'];

        let armors: Array<string> = [];
        let weapons: Array<string> = ['One wooden shield','One simple weapon'];
        let secondWeapons: Array<string> = ['One scimitar','One simple weapon'];
        let packs: Array<string> = [];
        let others: Array<string> = [];

        // I might not need to make seperate popups for each class, but I will likely need different finalizing methods for each class
        let level1Traits: Array<ClassTraitRequirements> = [
            { header: "Druidic", description: "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic.", choices: []}  
        ];
        //make a seperate traits property for each level, containing whatever may be needed.
        // level2Traits: [
        //     {},
        //     {}
        // ]

export class DruidRequirements extends Requirements{
        constructor(){
            super(role, skills, armors, weapons, secondWeapons, packs, others, level1Traits); //add level 2-20 traits later
        }
}