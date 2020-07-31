import { Requirements } from './Requirements';

export const ClassRequirements: Requirements[] = [

    // global choices include:
    // Choose race
    // Choose class
    // Choose background
    // health
    // stats


    // RANGER
    {
        role: "Ranger",

        // Ranger choices include:
        skills: ['3','Animal Handling', 'Athletics', 'Insight',
            'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival'],

        armors: ["Scale Mail", "Leather Armor"],

        weapons: ['Two shortswords', 'Two simple Melee Weapons'],

        secondWeapons: ['Longbow and a Quiver of 20 Arrows'],

        packs: ["Dungeoneer's Pack", "Explorer's Pack"],


        level1Header: ['Favored Enemy','Favored Terrain'],
        // I am going to have to form a pattern here. For now, it's one full ability description per index, with lists at the end of the array.
        level1Desc: ['Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. Choose a type of Favored enemy: Aberrations, Beasts, Celestials, Constructs, Dragons, Elementals, fey, Fiends, Giants, Monstrosities, oozes, Plants, or Undead. Alternatively, you can select two races of Humanoid (such as Gnolls and orcs) as Favored enemies. You have advantage on Wisdom (Survival) checks to track your Favored enemies, as well as on Intelligence Checks to recall information about them. When you gain this feature, you also learn one language of your choice that is spoken by your Favored enemies, if they speak one at all. You choose one additional Favored Enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of Monsters you have encountered on your Adventures.',
                'You are particularly familiar with one type of natural Environment and are adept at traveling and surviving in such regions. Choose one type of Favored terrain: Arctic, coast, Desert, Forest, Grassland, Mountain, swamp, or The Underdark. When you make an Intelligence or Wisdom check related to your Favored terrain, your Proficiency Bonus is doubled if you are using a skill that you are proficient in. While traveling for an hour or more in your Favored terrain, you gain the following benefits:',
                    "Difficult Terrain doesn't slow your group's Travel.",
                    "Your group can't become lost except by magical means.",
                    "Even when you are engaged in another Activity While Traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
                    "If you are traveling alone, you can move stealthily at a normal pace.",
                    "When you Forage, you find twice as much food as you normally would.",
                    "While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
                    "You choose additional Favored terrain types at 6th and 10th level."],
                    // The most indented portion is to be formatted into a list

        // first line: Favored Enemy, second line: Natural Explorer
        level1Choices: [['Aberrations', 'Beasts', 'Celestials', 'Dragons', 'Elementals', 'Fey', 'Fiends', 'Giants', 'Monstrosities', 'Oozes', 'Plants', 'Undead'],
            ['Artic', 'Coast', 'Desert', 'Forest', 'Grassland', 'Mountain', 'Swamp', 'The Underdark']],
            //so this is a 2D array, so that each primary index is a ability index and each secondary is for the choices involved.
    }

    // Fighter
    


]