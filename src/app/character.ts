import { Weapon } from "./weapon";

export interface Character{
    // header component
    name: string;
    race: string;
    class: string;
    level: number;
    xp: number;
    background: string;
    alignment: string;
    // Vitals Component
    armor_class: number;
    max_hp: number;
    temp_hp: number;
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
    // weapons component
    weapons: Array<Weapon>;
    // Spells component


}