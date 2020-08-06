import { Requirements } from '../Requirements';
import { ClassTraitRequirements } from '../classTraitRequirements';


let role: string = "Ranger";

let skills: Array<string> = ['3', 'Animal Handling', 'Athletics', 'Insight',
    'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival'];

let armors: Array<string> = ["Scale Mail", "Leather Armor"];

let weapons: Array<string> = ['Two shortswords', 'Two simple Melee Weapons'];

let secondWeapons: Array<string> = [];

let packs: Array<string> = ["Dungeoneer's Pack", "Explorer's Pack"];

let others: Array<string> = [];
// I might not need to make seperate popups for each class, but I will likely need different finalizing methods for each class
let level1Traits: Array<ClassTraitRequirements> = [
    { header: 'Favored Enemy', description: 'Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. Choose a type of Favored enemy: Aberrations, Beasts, Celestials, Constructs, Dragons, Elementals, fey, Fiends, Giants, Monstrosities, oozes, Plants, or Undead. Alternatively, you can select two races of Humanoid (such as Gnolls and orcs) as Favored enemies. You have advantage on Wisdom (Survival) checks to track your Favored enemies, as well as on Intelligence Checks to recall information about them. When you gain this feature, you also learn one language of your choice that is spoken by your Favored enemies, if they speak one at all. You choose one additional Favored Enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of Monsters you have encountered on your Adventures.', choices: ['Aberrations', 'Beasts', 'Celestials', 'Dragons', 'Elementals', 'Fey', 'Fiends', 'Giants', 'Monstrosities', 'Oozes', 'Plants', 'Undead'] },
    { header: 'Favored Terrain', description: "You are particularly familiar with one type of natural Environment and are adept at traveling and surviving in such regions. Choose one type of Favored terrain: Arctic, coast, Desert, Forest, Grassland, Mountain, swamp, or The Underdark. When you make an Intelligence or Wisdom check related to your Favored terrain, your Proficiency Bonus is doubled if you are using a skill that you are proficient in. While traveling for an hour or more in your Favored terrain, you gain the following benefits: \n Difficult Terrain doesn't slow your group's Travel. Your group can't become lost except by magical means. Even when you are engaged in another Activity While Traveling (such as foraging, navigating, or tracking), you remain alert to danger. If you are traveling alone, you can move stealthily at a normal pace. When you Forage, you find twice as much food as you normally would. While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area. You choose additional Favored terrain types at 6th and 10th level.", choices: ['Arctic', 'Coast', 'Desert', 'Forest', 'Grassland', 'Mountain', 'Swamp', 'The Underdark'] }
];
//make a seperate traits property for each level, containing whatever may be needed.
// level2Traits: [
//     {},
//     {}
// ]

export class RangerRequirements extends Requirements {

    constructor() {
        super(role, skills, armors, weapons, secondWeapons, packs, others, level1Traits); //add level 2-20 traits later
    }

}