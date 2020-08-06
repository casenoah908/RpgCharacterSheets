import { Race } from '../race';
import { RaceTrait } from '../raceTrait';

    let name: string = "Human";
    let abilityScoreIncrease: Array<number> = [1, 1, 1, 1, 1, 1];
    let age: string = "Humans reach adulthood in their late teens and live less than a century.";
    let size: string = "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.";
    let speed: number = 30;
    let languages: Array<string> = ["Common", "One extra language of your choice"];
    let skillProficiencies: Array<string> = [];
    let weaponProficiencies: Array<string> = [];
    let armorProficiencies: Array<string> = [];
    let toolProficiencies: Array<string> = [];
    let traits: Array<RaceTrait> = [];
    let raceImageUrl: string = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/258/420/618/636271801914013762.png'

export class Human extends Race {
    constructor() {
        super(name, abilityScoreIncrease, age, size, speed, languages, skillProficiencies, weaponProficiencies, armorProficiencies, toolProficiencies, traits, raceImageUrl);
    }
    
}