import { Race } from '../race';
import { RaceTrait } from '../raceTrait';

    let name: string = "Dragonborn";
    let abilityScoreIncrease: Array<number> = [2, 0, 0, 0, 0, 1];
    let age: string = "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.";
    let size: string = "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.";
    let speed: number = 30;
    let languages: Array<string> = ["Common", "Draconic"];
    let skillProficiencies: Array<string> = [];
    let weaponProficiencies: Array<string> = [];
    let armorProficiencies: Array<string> = [];
    let toolProficiencies: Array<string> = [];
    let traits: Array<RaceTrait> = [{ header: "Damage Resistance", description: "You have resistance to the damage type associated with your draconic ancestry." },
    ];
    let raceImageUrl: string = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png';

export class Dragonborn extends Race {
    draconicAncestry: string;
    constructor(draconicAncestry: string) {
        super(name, abilityScoreIncrease, age, size, speed, languages, skillProficiencies, weaponProficiencies, armorProficiencies, toolProficiencies, traits, raceImageUrl);
        this.draconicAncestry = draconicAncestry;
    }

    setDraconicAncestry(value: string){
        this.draconicAncestry = value;
    }
}