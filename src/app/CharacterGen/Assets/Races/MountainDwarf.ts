import { Race } from '../../Objects/race';
import { RaceTrait } from '../../Objects/raceTrait';

    let name: string = "Mountain Dwarf";
    let abilityScoreIncrease: Array<number> = [2, 0, 2, 0, 0, 0];
    let age: string = "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.";
    let size: string = "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.";
    let speed: number = 25;
    let languages: Array<string> = ["Common", "Dwarvish"];
    let skillProficiencies: Array<string> = [];
    let weaponProficiencies: Array<string> = ["battleaxe","handaxe","light hammer","warhammer"];
    let armorProficiencies: Array<string> = ["light armor", "medium armor"];
    let toolProficiencies: Array<string> = [];
    let traits: Array<RaceTrait> = [{ header: "Unimpeded Speed", description: "Your speed is not reduced by wearing heavy armor." },
                                    { header: "Darkvision", description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."},
                                    { header: "Dwarven Resilience", description: "You have advantage on saving throws against poison, and you have resistance against poison damage (explained in the “Combat” section)."},
                                    { header: "Stonecunning", description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."},

    ];
    let raceImageUrl: string = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/254/420/618/636271781394265550.png';

export class MountainDwarf extends Race {
    constructor() {
        super(name, abilityScoreIncrease, age, size, speed, languages, skillProficiencies, weaponProficiencies, armorProficiencies, toolProficiencies, traits, raceImageUrl);
    }

}