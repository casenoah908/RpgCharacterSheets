import { Race } from '../../Objects/race';
import { RaceTrait } from '../../Objects/raceTrait';

    let name: string = "Deep Gnome";
    let abilityScoreIncrease: Array<number> = [0, 1, 0, 2, 0, 0];
    let age: string = "Deep gnomes are short-lived for gnomes. They mature at the same rate humans do and are considered full-grown adults by 25. They live 200 to 250 years, although hard toil and the dangers of the Underdark often claim them before their time.";
    let size: string = "A typical svirfneblin stands about 3 to 3½ feet tall and weighs 80 to 120 pounds. Your size is Small.";
    let speed: number = 25;

    let languages: Array<string> = ["Common", "Gnomish", "Undercommon"];

    let skillProficiencies: Array<string> = [];
    let weaponProficiencies: Array<string> = [];
    let armorProficiencies: Array<string> = [];
    let toolProficiencies: Array<string> = [];
    let traits: Array<RaceTrait> = [{ header: "Superior Darkvision", description: "Your darkvision has a radius of 120 feet." },
        { header: "Gnome Cunning", description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."},
        { header: "Stone Camouflage", description: "You have advantage on Dexterity (Stealth) checks to hide in rocky terrain."}
    ];
    let raceImageUrl: string = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png'

export class DeepGnome extends Race {

    constructor() {
        super(name, abilityScoreIncrease, age, size, speed, languages, skillProficiencies, weaponProficiencies, armorProficiencies, toolProficiencies, traits, raceImageUrl);
    }
    
}