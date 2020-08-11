import { Character } from '../../Objects/character';
import { Armor } from '../Items/armor';
import { Weapon } from '../Items/weapon';
import { WeaponsList } from '../Items/weaponsList';
import { ArmorsList } from '../Items/armorsList';


//CLASS SPECIFIC DATA!!!

//armors
//chain mail
let armors: Armor[] = [ArmorsList[10]];
//weapons
let weapons: Weapon[] = [];
//packs
let packs: string[] = [];
//others
let others: string[] = ["Holy symbol"];
//SavingThrows
let savingThrowProfs: string[] = ["Wisdom","Charisma"]; //Ranger

//Weapon Profs
let weaponProfs: string[] = ["simple weapons","martial weapons"]; //Ranger

//ArmorProfs
let armorProfs: string[] = ["All armor","shields"]; //Ranger

//ToolProfs
let toolProfs: string[] = []; //Ranger

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = 
[[0,0,0,0,0,0,0], //level 1
[0,0,2,0,0,0,0], //level 2
[0,0,3,0,0,0,0], //level 3
[0,0,3,0,0,0,0], //level 4
[0,0,4,2,0,0,0], //level 5
[0,0,4,2,0,0,0], //level 6
[0,0,4,3,0,0,0], //level 7
[0,0,4,3,0,0,0], //level 8
[0,0,4,3,2,0,0], //level 9
[0,0,4,3,2,0,0], //level 10
[0,0,4,3,3,0,0], //level 11
[0,0,4,3,3,0,0], //level 12
[0,0,4,3,3,1,0], //level 13
[0,0,4,3,3,1,0], //level 14
[0,0,4,3,3,2,0], //level 15
[0,0,4,3,3,2,0], //level 16
[0,0,4,3,3,3,1], //level 17
[0,0,4,3,3,3,1], //level 18
[0,0,4,3,3,3,2], //level 19
[0,0,4,3,3,3,2]]; //level 20


export class Paladin extends Character{

    //ranger specific properties:
    
    

    //define character properties throguh constructor
    constructor(){
        super('Paladin','https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/365/420/618/636272701937419552.png',10,armors,weapons,packs,others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, 'Charisma',spellTable);
    }
}