import { Character } from '../../Objects/character';
import { Armor } from '../Items/armor';
import { Weapon } from '../Items/weapon';
import { WeaponsList } from '../Items/weaponsList';
import { ArmorsList } from '../Items/armorsList';

//CLASS SPECIFIC DATA!!!
//armors
let armors: Armor[] = [];
//weapons
let weapons: Weapon[] = [];
//packs
let packs: string[] = [];
//others
let others: string[] = [];

//SavingThrows
let savingThrowProfs: string[] = ["Strength","Dexterity"];

//Weapon Profs
let weaponProfs: string[] = ["simple weapons","martial weapons"];

//ArmorProfs
let armorProfs: string[] = ["light armor","medium armor","shields"];

//ToolProfs
let toolProfs: string[] = [];

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = null;


export class Fighter extends Character{

    //ranger specific properties:
    
    

    //define character properties throguh constructor
    constructor(){
        super('Fighter','https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/359/420/618/636272697874197438.png',10, armors, weapons, packs, others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, '', spellTable);
    }
}