import { Race } from '../../Objects/race';
import { RaceTrait } from '../../Objects/raceTrait';

    let name: string = "Tiefling";
    let abilityScoreIncrease: Array<number> = [0, 0, 0, 1, 0, 2];
    let age: string = "Tieflings mature at the same rate as humans but live a few years longer.";
    let size: string = "Tieflings are about the same size and build as humans. Your size is Medium.";
    let speed: number = 30;
    let languages: Array<string> = ["Common", "Infernal"];
    let skillProficiencies: Array<string> = [];
    let weaponProficiencies: Array<string> = [];
    let armorProficiencies: Array<string> = [];
    let toolProficiencies: Array<string> = [];
    let traits: Array<RaceTrait> = [{header: "Darkvision", description: "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."},
        { header: "Hellish Resistance", description: "You have resistance to fire damage."},
        { header: "Infernal Legacy", description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."}
    ];
    let raceImageUrl: string = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/641/420/618/636287076637981942.png'

export class Tiefling extends Race {
    constructor() {
        super(name, abilityScoreIncrease, age, size, speed, languages, skillProficiencies, weaponProficiencies, armorProficiencies, toolProficiencies, traits, raceImageUrl);
    }
    
}