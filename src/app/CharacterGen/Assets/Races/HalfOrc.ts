import { Race } from '../../Objects/race';
import { RaceTrait } from '../../Objects/raceTrait';

    let name: string = "Half Orc";
    let abilityScoreIncrease: Array<number> = [2, 0, 1, 0, 0, 0];
    let age: string = "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.";
    let size: string = "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.";
    let speed: number = 30;
    let languages: Array<string> = ["Common", "Orc"];
    let skillProficiencies: Array<string> = ["Intimidation"];
    let weaponProficiencies: Array<string> = [];
    let armorProficiencies: Array<string> = [];
    let toolProficiencies: Array<string> = [];
    let traits: Array<RaceTrait> = [{ header: "Darkvision", description: "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray." },
        { header: "Menacing", description: "You gain proficiency in the Intimidation skill."},
        { header: "Relentless Endurance", description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest."},
        { header: "Savage Attacks", description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit."}
    ];
    let raceImageUrl: string = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/466/420/618/636274570630462055.png'

export class HalfOrc extends Race {
    constructor() {
        super(name, abilityScoreIncrease, age, size, speed, languages, skillProficiencies, weaponProficiencies, armorProficiencies, toolProficiencies, traits, raceImageUrl);
    }
    
}