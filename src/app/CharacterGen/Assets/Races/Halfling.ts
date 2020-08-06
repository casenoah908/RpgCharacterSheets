import { Race } from '../../Objects/race';
import { RaceTrait } from '../../Objects/raceTrait';

    let name: string = "Halfling";
    let abilityScoreIncrease: Array<number> = [0, 2, 0, 0, 0, 0];
    let age: string = "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.";
    let size: string = "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.";
    let speed: number = 25;
    let languages: Array<string> = ["Common", "Halfling"];

    let skillProficiencies: Array<string> = [];
    let weaponProficiencies: Array<string> = [];
    let armorProficiencies: Array<string> = [];
    let toolProficiencies: Array<string> = [];

    let traits: Array<RaceTrait> = [{ header: "Lucky", description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll." },
        { header: "Brave", description: "You have advantage on saving throws against being frightened."},
        { header: "Halfling Nimbleness", description: "You can move through the space of any creature that is of a size larger than yours."}
    ];
    let raceImageUrl: string = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/256/420/618/636271789409776659.png';

export class Halfling extends Race {
    constructor() {
        super(name, abilityScoreIncrease, age, size, speed, languages, skillProficiencies, weaponProficiencies, armorProficiencies, toolProficiencies, traits, raceImageUrl);
    }

}