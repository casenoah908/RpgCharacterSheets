import { Character } from '../../Objects/character';
import { Armor } from '../Items/armor';
import { Weapon } from '../Items/weapon';
import { WeaponsList } from '../Items/weaponsList';
import { ArmorsList } from '../Items/armorsList';

//CLASS SPECIFIC DATA!!!

//armors
//leather armor
let armors: Armor[] = [ArmorsList[2]];
//weapons
let weapons: Weapon[] = [];
//packs
let packs: string[] = ["Explorer's pack"];
//others
let others: string[] = ["Druidic focus"];
//SavingThrows
let savingThrowProfs: string[] = ["Wisdom","Intelligence"];

//Weapon Profs
let weaponProfs: string[] = ['clubs','daggers','darts','javelins','maces','quarterstaffs','scimitars','sickles','slings','spears'];

//ArmorProfs
let armorProfs: string[] = ['light armor','medium armor','shields'];

//ToolProfs
let toolProfs: string[] = ["Herbalism kit"];

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = [
    [2,0,2,0,0,0,0,0,0,0,0], //level 1
    [2,0,3,0,0,0,0,0,0,0,0], //level 2
    [2,0,4,2,0,0,0,0,0,0,0], //level 3
    [3,0,4,3,0,0,0,0,0,0,0], //level 4
    [3,0,4,3,2,0,0,0,0,0,0], //level 5
    [3,0,4,3,3,0,0,0,0,0,0], //level 6
    [3,0,4,3,3,1,0,0,0,0,0], //level 7
    [3,0,4,3,3,2,0,0,0,0,0], //level 8
    [3,0,4,3,3,3,1,0,0,0,0], //level 9
    [4,0,4,3,3,3,2,0,0,0,0], //level 10
    [4,0,4,3,3,3,2,1,0,0,0], //level 11
    [4,0,4,3,3,3,2,1,0,0,0], //level 12
    [4,0,4,3,3,3,2,1,1,0,0], //level 13
    [4,0,4,3,3,3,2,1,1,0,0], //level 14
    [4,0,4,3,3,3,2,1,1,1,0], //level 15
    [4,0,4,3,3,3,2,1,1,1,0], //level 16
    [4,0,4,3,3,3,2,1,1,1,1], //level 17
    [4,0,4,3,3,3,3,1,1,1,1], //level 18
    [4,0,4,3,3,3,3,2,1,1,1], //level 19
    [4,0,4,3,3,3,3,2,2,1,1] //level 20
];


export class Druid extends Character{

    //define character properties throguh constructor
    constructor(){
        super('Druid','https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/346/420/618/636272691461725405.png',8,armors,weapons,packs,others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, 'Wisdom', spellTable);
    }
}