import { Weapon } from './weapon';

export const WeaponsList: Weapon[] = [

    //Simple Melee Weapons
    {name: 'Club', classification: 'simple weapon', price: '1 sp', damageType: 'bludgeoning', damageDie: [4], weight: 2, bonusType: ['strength'], properties: ['Light']},
    {name: 'Dagger', classification: 'simple weapon', price: '2 gp', damageType: 'piercing', damageDie: [4], weight: 1, bonusType: ['strength','dexterity'], properties: ['Finesse','Light','Thrown (range 20/60)']},
    {name: 'Greatclub', classification: 'simple weapon', price: '2 sp', damageType: 'bludgeoning', damageDie: [8], weight: 10, bonusType: ['strength'], properties: ['Two-handed']},
    {name: 'Handaxe', classification: 'simple weapon', price: '5 gp', damageType: 'slashing', damageDie: [6], weight: 2, bonusType: ['strength'], properties: ['Light','Thrown (range 20/60)']},
    {name: 'Javelin', classification: 'simple weapon', price: '5 sp', damageType: 'piercing', damageDie: [6], weight: 2, bonusType: ['strength'], properties: ['Thrown (range 30/120)']},
    {name: 'Light Hammer', classification: 'simple weapon', price: '2 gp', damageType: 'bludgeoning', damageDie: [4], weight: 2, bonusType: ['strength'], properties: ['Light','Thrown (range 20/60)']},
    {name: 'Mace', classification: 'simple weapon', price: '5 gp', damageType: 'bludgeoning', damageDie: [6], weight: 4, bonusType: ['strength'], properties: []},
    {name: 'Quarterstaff', classification: 'simple weapon', price: '2 sp', damageType: 'bludgeoning', damageDie: [6], weight: 4, bonusType: ['strength'], properties: ['Versatile (1d8)']},
    {name: 'Sickle', classification: 'simple weapon', price: '1 gp', damageType: 'slashing', damageDie: [4], weight: 2, bonusType: ['strength'], properties: ['Light']},
    {name: 'Spear', classification: 'simple weapon', price: '1 gp', damageType: 'piercing', damageDie: [6], weight: 3, bonusType: ['strength'], properties: ['Thrown (20/60)','Versatile (1d8)']},
    {name: 'Unarmed Strike', classification: 'simple weapon', price: '', damageType: 'bludgeoning', damageDie: [4], weight: 0, bonusType: ['strength'], properties: []},

    //Simple Ranged Weapons
    {name: 'Light Crossbow', classification: 'simple weapon', price: '25 gp', damageType: 'piercing', damageDie: [8], weight: 5, bonusType: ['dexterity'], properties: ['Ammunition (range 80/320)','Loading','Two-handed']},
    {name: 'Dart', classification: 'simple weapon', price: '5 cp', damageType: 'piercing', damageDie: [4], weight: 0.25, bonusType: ['dexterity'], properties: ['Finesse','Thrown (range 20/60)']},
    {name: 'Shortbow', classification: 'simple weapon', price: '25 gp', damageType: 'piercing', damageDie: [6], weight: 2, bonusType: ['dexterity'], properties: ['Ammunition (range 80/320)','Two-handed']},
    {name: 'Sling', classification: 'simple weapon', price: '1 sp', damageType: 'bludgeoning', damageDie: [4], weight: 0, bonusType: ['dexterity'], properties: ['Ammunition (range 30/120)']},
    
    //Martial Melee Weapon
    {name: 'Battleaxe', classification: 'martial weapon', price: '10 gp', damageType: 'slashing', damageDie: [8], weight: 4, bonusType: ['strength'], properties: ['Versatile (1d10)']},
    {name: 'Flail', classification: 'martial weapon', price: '10 gp', damageType: 'bludgeoning', damageDie: [8], weight: 2, bonusType: ['strength'], properties: []},
    {name: 'Glaive', classification: 'martial weapon', price: '20 gp', damageType: 'slashing', damageDie: [10], weight: 6, bonusType: ['strength'], properties: ['Heavey','Reach','Two-Handed']},
    {name: 'Greataxe', classification: 'martial weapon', price: '30 gp', damageType: 'slashing', damageDie: [12], weight: 7, bonusType: ['strength'], properties: ['Heavy','Two-Handed']},
    {name: 'Great sword', classification: 'martial weapon', price: '50 gp', damageType: 'slashing', damageDie: [6,6], weight: 6, bonusType: ['strength'], properties: ['Heavy','Two-Handed']},
    {name: 'Halberd', classification: 'martial weapon', price: '20 gp', damageType: 'slashing', damageDie: [10], weight: 6, bonusType: ['strength'], properties: ['Heavy','Reach','Two-Handed']},
    {name: 'Lance', classification: 'martial weapon', price: '10 gp', damageType: 'piercing', damageDie: [12], weight: 6, bonusType: ['strength'], properties: ['Reach','Special']},
    {name: 'Long sword', classification: 'martial weapon', price: '15 gp', damageType: 'slashing',  damageDie: [8], weight: 3, bonusType: ['strength'], properties: ['Versatile (1d10)']},
    {name: 'Maul', classification: 'martial weapon', price: '10 gp', damageType: 'bludgeoning', damageDie: [6,6], weight: 10, bonusType: ['strength'], properties: ['Heavy','Two-Handed']},
    {name: 'Morning star', classification: 'martial weapon', price: '15 gp', damageType: 'piercing', damageDie: [8], weight: 4, bonusType: ['strength'], properties: []},
    {name: 'Pike', classification: 'martial weapon', price: '5 gp', damageType: 'piercing', damageDie: [10], weight: 18, bonusType: ['strength'], properties: ['Heavy','Reach','Two-Handed']},
    {name: 'Rapier', classification: 'martial weapon', price: '25 gp', damageType: 'piercing', damageDie: [8], weight: 2, bonusType: ['strength','dexterity'], properties: ['Finesse']},
    {name: 'Scimitar', classification: 'martial weapon', price: '25 gp', damageType: 'slashing', damageDie: [6], weight: 3, bonusType: ['strength','dexterity'], properties: ['Finesse','Light']},
    {name: 'Short sword', classification: 'martial weapon', price: '10 gp', damageType: 'piercing', damageDie: [6], weight: 2, bonusType: ['strength','dexterity'], properties: ['Finesse','Light']},
    {name: 'Trident', classification: 'martial weapon', price: '5 gp', damageType: 'piercing', damageDie: [6], weight: 4, bonusType: ['strength'], properties: ['Thrown (range 20/60)','Versatile (1d8)']},
    {name: 'War pick', classification: 'martial weapon', price: '5 gp', damageType: 'piercing', damageDie: [8], weight: 2, bonusType: ['strength'], properties: []},
    {name: 'War hammer', classification: 'martial weapon', price: '15 gp', damageType: 'bludgeoning', damageDie: [8], weight: 2, bonusType: ['strength'], properties: ['Versatile (1d10)']},
    {name: 'Whip', classification: 'martial weapon', price: '2 gp', damageType: 'slashing', damageDie: [4], weight: 3, bonusType: ['strength','dexterity'], properties: ['Finesse','Reach']},

    //Martial Ranged Weapons
    {name: 'Blowgun', classification: 'martial weapon', price: '10 gp', damageType: 'piercing', damageDie: [0], weight: 1, bonusType: ['dexterity'], properties: ['Ammunition (range 25/100)','Loading']},
    {name: 'Hand Crossbow', classification: 'martial weapon', price: '75 gp', damageType: 'piercing', damageDie: [6], weight: 3, bonusType: ['dexterity'], properties: ['Ammunition (range 30/120)','Light','Loading']},
    {name: 'Heavy Crossbow', classification: 'martial weapon', price: '50 gp', damageType: 'piercing', damageDie: [10], weight: 18, bonusType: ['dexterity'], properties: ['Ammunition (range 100/400)','Heavy','Loading','Two-Handed']},
    {name: 'Longbow', classification: 'martial weapon', price: '50 gp', damageType: 'piercing', damageDie: [8], weight: 2, bonusType: ['dexterity'], properties: ['Ammunition (range 150/600)','Heavy','Two-Handed']},
    {name: 'Net', classification: 'martial weapon', price: '1 gp', damageType: '', damageDie: [0], weight: 3, bonusType: ['dexterity'], properties: ['Special','Thrown (range 5/15)']}

];