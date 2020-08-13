import { Armor } from './armor';

export const ArmorsList: Armor[] = [

    //Unarmored
    {name: 'Unarmored', classification: '', armorClass: 10, strengthRequirement: 0, stealthDisadvantage: false, weight: 0, cost: '0 gp'},
    
    //Light Armor
    {name: 'Padded Armor', classification: 'Light Armor', armorClass: 11, strengthRequirement: 0, stealthDisadvantage: true, weight: 8, cost: '5 gp'},
    {name: 'Leather Armor', classification: 'Light Armor', armorClass: 11, strengthRequirement: 0, stealthDisadvantage: false, weight: 10, cost: '10 gp'},
    {name: 'Studded Leather Armor', classification: 'Light Armor', armorClass: 12, strengthRequirement: 0, stealthDisadvantage: false, weight: 13, cost: '45 gp'},
    
    //Medium Armor
    {name: 'Hide Armor', classification: 'Medium Armor', armorClass: 12, strengthRequirement: 0, stealthDisadvantage: false, weight: 12, cost: '10 gp'},
    {name: 'Chain Shirt', classification: 'Medium Armor', armorClass: 13, strengthRequirement: 0, stealthDisadvantage: false, weight: 20, cost: '50 gp'},
    {name: 'Scale Mail', classification: 'Medium Armor', armorClass: 14, strengthRequirement: 0, stealthDisadvantage: true, weight: 45, cost: '50 gp'},
    {name: 'Breastplate', classification: 'Medium Armor', armorClass: 14, strengthRequirement: 0, stealthDisadvantage: false, weight: 20, cost: '400 gp'},
    {name: 'Halfplate', classification: 'Medium Armor', armorClass: 15, strengthRequirement: 0, stealthDisadvantage: true, weight: 40, cost: '750 gp'},
    
    //Heavy Armor
    {name: 'Ring Mail', classification: 'Heavy Armor', armorClass: 14, strengthRequirement: 0, stealthDisadvantage: true, weight: 40, cost: '30 gp'},
    {name: 'Chain Mail', classification: 'Heavy Armor', armorClass: 16, strengthRequirement: 13, stealthDisadvantage: true, weight: 55, cost: '75 gp'},
    {name: 'Splint', classification: 'Heavy Armor', armorClass: 17, strengthRequirement: 15, stealthDisadvantage: true, weight: 60, cost: '200 gp'},
    {name: 'Plate', classification: 'Heavy Armor', armorClass: 18, strengthRequirement: 15, stealthDisadvantage: true, weight: 65, cost: '1,500 gp'},
    
    //Shield
    {name: 'Shield', classification: 'Shield', armorClass: 2, strengthRequirement: 0, stealthDisadvantage: false, weight: 6, cost: '10 gp'},
    {name: 'Wooden Shield', classification: 'Shield', armorClass: 2, strengthRequirement: 0, stealthDisadvantage: false, weight: 6, cost: '10 gp'}

];