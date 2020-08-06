import { Race } from '../race';
import { RaceTrait } from '../raceTrait';

    let name: string = "Half Elf";
    let abilityScoreIncrease: Array<number> = [0, 0, 0, 0, 0, 2];
    let age: string = "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.";
    let size: string = "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.";
    let speed: number = 30;
    let languages: Array<string> = ["Common", "Elvish", "One extra language of your choice"];
    let skillProficiencies: Array<string> = ["Perception"];
    let weaponProficiencies: Array<string> = [];
    let armorProficiencies: Array<string> = [];
    let toolProficiencies: Array<string> = [];
    let traits: Array<RaceTrait> = [{ header: "Darkvision", description: "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray." },
        { header: "Fey Ancestry", description: "You have advantage on saving throws against being charmed, and magic can’t put you to sleep."}
    ];
    let raceImageUrl: string = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/481/420/618/636274618102950794.png'



export class HalfElf extends Race {
    chosenRacialBonuses: Array<number>;
    skillVersatility: Array<string>;
    constructor(chosenRacialBonuses: Array<number>, skillVersatility: Array<string>) {
        super(name, abilityScoreIncrease, age, size, speed, languages, skillProficiencies, weaponProficiencies, armorProficiencies, toolProficiencies, traits, raceImageUrl);
        this.chosenRacialBonuses = chosenRacialBonuses;
        this.skillVersatility = skillVersatility;
    }
    
}