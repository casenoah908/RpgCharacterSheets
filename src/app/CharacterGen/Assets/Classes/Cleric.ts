import { Character } from '../../Objects/character';
import { Armor } from '../Items/armor';
import { Weapon } from '../Items/weapon';
import { WeaponsList } from '../Items/weaponsList';
import { ArmorsList } from '../Items/armorsList';

//CLASS SPECIFIC DATA!!!

//armors
//shield
let armors: Armor[] = [ArmorsList[13]];
//weapons
let weapons: Weapon[] = [];
//packs
let packs: string[] = [];
//others
let others: string[] = ["Holy symbol"];
//SavingThrows
let savingThrowProfs: string[] = ["Wisdom","Charisma"];

//Weapon Profs
let weaponProfs: string[] = ["simple weapons"];

//ArmorProfs
let armorProfs: string[] = ["light armor","medium armor","shields"];

//ToolProfs
let toolProfs: string[] = [];

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = [
    [3,0,2,0,0,0,0,0,0,0,0], //level 1
    [3,0,3,0,0,0,0,0,0,0,0], //level 2
    [3,0,4,2,0,0,0,0,0,0,0], //level 3
    [4,0,4,3,0,0,0,0,0,0,0], //level 4
    [4,0,4,3,2,0,0,0,0,0,0], //level 5
    [4,0,4,3,3,0,0,0,0,0,0], //level 6
    [4,0,4,3,3,1,0,0,0,0,0], //level 7
    [4,0,4,3,3,2,0,0,0,0,0], //level 8
    [4,0,4,3,3,3,1,0,0,0,0], //level 9
    [5,0,4,3,3,3,2,0,0,0,0], //level 10
    [5,0,4,3,3,3,2,1,0,0,0], //level 11
    [5,0,4,3,3,3,2,1,0,0,0], //level 12
    [5,0,4,3,3,3,2,1,1,0,0], //level 13
    [5,0,4,3,3,3,2,1,1,0,0], //level 14
    [5,0,4,3,3,3,2,1,1,1,0], //level 15
    [5,0,4,3,3,3,2,1,1,1,0], //level 16
    [5,0,4,3,3,3,2,1,1,1,1], //level 17
    [5,0,4,3,3,3,3,1,1,1,1], //level 18
    [5,0,4,3,3,3,3,2,1,1,1], //level 19
    [5,0,4,3,3,3,3,2,2,1,1] //level 20
];


export class Cleric extends Character{

    //define character properties throguh constructor
    constructor(){
        super('Cleric','https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/371/420/618/636272706155064423.png',8,armors,weapons,packs,others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, 'Wisdom', spellTable);
    }
}