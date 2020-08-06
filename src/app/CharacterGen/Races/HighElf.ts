import { Race } from '../race';
import { RaceTrait } from '../raceTrait';

    let name: string = "High Elf";
    let abilityScoreIncrease: Array<number> = [0, 2, 0, 1, 0, 0];
    let age: string = "Although elves reach physical maturity at about the same age as Humans, the elven understanding of Adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims Adulthood and an adult name around the age of 100 and can live to be 750 years old.";
    let size: string = "Medium size, 5 to 6 feet tall";
    let speed: number = 30;
    let languages: Array<string> = ["Common", "Elvish", "One Extra of Your Choice"];
    let skillProficiencies: Array<string> = ["Perception"];
    let weaponProficiencies: Array<string> = ["Longsword", "Shortsword", "Shortbow", "Longbow"];
    let armorProficiencies: Array<string> = [];
    let toolProficiencies: Array<string> = [];
    let traits: Array<RaceTrait> = [{ header: "Darkvision", description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim Conditions. You can see in dim light within 60 feet of you as if it were bright light, and in Darkness as if it were dim light. You can’t discern color in Darkness, only Shades of Gray." },
    { header: "Keen Senses", description: "You have proficiency in the Perception skill." },
    { header: "Fey Ancestry", description: "You have advantage on Saving Throws against being Charmed, and magic can’t put you to sleep." },
    { header: "Trance", description: "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After Resting in this way, you gain the same benefit that a human does from 8 hours of sleep." },
    { header: "Elf Weapon Training", description: "You have proficiency with the longsword, shortsword, shortbow, and longbow."},
    { header: "Cantrip", description: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."},
    { header: "Extra Language", description: "You can speak, read, and wirte one extra language of your choice."}
    ];
    let raceImageUrl: string = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/639/420/618/636287075350739045.png'

export class HighElf extends Race {

    constructor() {
        super(name, abilityScoreIncrease, age, size, speed, languages, skillProficiencies, weaponProficiencies, armorProficiencies, toolProficiencies, traits, raceImageUrl);
    }
    
}