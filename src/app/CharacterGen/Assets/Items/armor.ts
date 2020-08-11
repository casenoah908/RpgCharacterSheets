export interface Armor{
    name: string;
    classification: string; // light, medium, heavy, shield
    armorClass: number;
    strengthRequirement: number;
    stealthDisadvantage: boolean;
    weight: number;
    cost: string;
}