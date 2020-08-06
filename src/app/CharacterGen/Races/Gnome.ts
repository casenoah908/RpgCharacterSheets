import { Race } from '../race';
import { RaceTrait } from '../raceTrait';

    let name: string = "Gnome";
    let abilityScoreIncrease: Array<number> = [0, 0, 0, 2, 0, 0];
    let age: string = "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.";
    let size: string = "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.";
    let speed: number = 25;

    let languages: Array<string> = ["Common", "Gnomish"];

    let skillProficiencies: Array<string> = [];
    let weaponProficiencies: Array<string> = [];
    let armorProficiencies: Array<string> = [];
    let toolProficiencies: Array<string> = [];
    let traits: Array<RaceTrait> = [{ header: "Darkvision", description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray." },
        { header: "Gnome Cunning", description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."}
    ];
    let raceImageUrl: string = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png'

export class Gnome extends Race {

    constructor() {
        super(name, abilityScoreIncrease, age, size, speed, languages, skillProficiencies, weaponProficiencies, armorProficiencies, toolProficiencies, traits, raceImageUrl);
    }
    
}