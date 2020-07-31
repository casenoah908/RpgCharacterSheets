import { RaceTrait } from './raceTrait';

export interface Race{
    name: string;
    abilityScoreIncrease: Array<number>; //array of 6 numbers, one for each stat. Ex: HighElf - [0,2,0,1,0,0]
    age: string;
    size: string;
    speed: number;
    languages: Array<string>;
    skillProficiencies: Array<string>;
    weaponProficiencies: Array<string>;
    armorProficiencies: Array<string>;
    //works kinda like a key value pair, contains a header and description property
    traits: Array<RaceTrait>;
    raceImageUrl: string;
}