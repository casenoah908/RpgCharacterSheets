import { Weapon } from "./weapon";
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';

export class Character{
    // header component
    name: string;
    race: string;
    role: string; 
    level: number; //preset
    xp: number; //preset
    background: string;
    alignment: string;
    // Vitals Component
    armor_class: number;
    max_hp: number;
    temp_hp: number; //preset
    current_hp: number;
    initiative: number;
    speed: number;
    passive_wisdom: number;
    hit_dice: number;
    // skills component
    proficiency_bonus: number;
    strength: number;
    dexterity: number;
    constitution: number;
    inteligence: number;
    wisdom: number;
    charisma: number;
    skillProfs: Array<string>;
    // weapons component
    weapons: Array<Weapon>;
    // Equipment
    platinum: number;
    gold: number;
    electrum: number;
    silver: number;
    copper: number;
    armors: Array<string>;
    packs: Array<string>;
    languages: Array<string>;
    others: Array<string>;
    armorProfs: Array<string>;
    weaponProfs: Array<string>;
    toolProfs: Array<string>;
    personalityTraits: string; //preset
    ideals: string; //preset
    bonds: string; //preset
    flaws: string; //preset
    //racial traits
    racialTraits: Array<string>;
    raceImageUrl: string;
    // Spells component
    spelcastingAbility: string; 
    spellSaveDC: number;
    spellAttackBonus: number;
    spellSlots: Array<number>; 
    spells: Array<string>;
    // class abilities
    levelAbilities: Array<string>; 

    

    
    
    

}

