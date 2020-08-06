import { Requirements } from '../Requirements';
import { ClassTraitRequirements } from '../classTraitRequirements';


        let role: string = "Cleric";

        let skills: Array<string> = ['2','History','Insight','Medicine','Persuasion','Religion'];

        let armors: Array<string> = ['Scale Mail','Leather Armor','Chain Mail (if proficient)'];
        let weapons: Array<string> = ['One mace','One warhammer (if proficient)'];
        let secondWeapons: Array<string> = ['One light crossbow and 20 bolts','One simple weapon'];
        let packs: Array<string> = ["Priest's pack","Explorer's pack"];
        let others: Array<string> = [];

        // I might not need to make seperate popups for each class, but I will likely need different finalizing methods for each class
        let level1Traits: Array<ClassTraitRequirements> = [
            { header: "Divine Domain", description: "Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. The Life domain is detailed at the end of the class description and provides examples of gods associated with it. See the Player’s Handbook for details on all the domains.Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.", choices: ['Knowledge','Life','Light','Nature','Tempest','Trickery','War']},
            { header: "Domain Spells", description: "Each domain has a list of spells — its domain spells — that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you.", choices: []}
        ];
        //make a seperate traits property for each level, containing whatever may be needed.
        // level2Traits: [
        //     {},
        //     {}
        // ]

export class ClericRequirements extends Requirements{
        constructor(){
            super(role, skills, armors, weapons, secondWeapons, packs, others, level1Traits); //add level 2-20 traits later
        }
}