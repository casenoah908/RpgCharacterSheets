import { RaceTrait } from './raceTrait';

export class Race{
    name: string;
    abilityScoreIncrease: Array<number>; //array of 6 numbers, one for each stat. Ex: HighElf - [0,2,0,1,0,0]
    age: string;
    size: string;
    speed: number;
    languages: Array<string>;
    skillProficiencies: Array<string>;
    weaponProficiencies: Array<string>;
    armorProficiencies: Array<string>;
    toolProficiencies: Array<string>;
    //works kinda like a key value pair, contains a header and description property
    traits: Array<RaceTrait>;
    raceImageUrl: string;

    constructor(name: string, abilityScoreIncrease: Array<number>, age: string, size: string, speed: number, languages: Array<string>, skillProficiencies: Array<string>, weaponProficiencies: Array<string>, armorProficiencies: Array<string>, toolProficiencies: Array<string>, traits: Array<RaceTrait>, raceImageUrl: string){

            this.name = name;
            this.abilityScoreIncrease = abilityScoreIncrease;
            this.age = age;
            this.size = size;
            this.speed = speed;
            this.languages = languages;
            this.skillProficiencies = skillProficiencies;
            this.weaponProficiencies = weaponProficiencies;
            this.armorProficiencies = armorProficiencies;
            this.toolProficiencies = toolProficiencies;
            this.traits = traits;
            this.raceImageUrl = raceImageUrl;
    }
}