import { Character } from './character';
//import classes
import { Barbarian } from '../Assets/Classes/Barbarian';
import { Bard } from '../Assets/Classes/Bard';
import { Cleric } from '../Assets/Classes/Cleric';
import { Druid } from '../Assets/Classes/Druid';
import { Fighter } from '../Assets/Classes/Fighter';
import { Monk } from '../Assets/Classes/Monk';
import { Paladin } from '../Assets/Classes/Paladin';
import { Ranger } from '../Assets/Classes/Ranger';
import { Rogue } from '../Assets/Classes/Rogue';
import { Sorceror } from '../Assets/Classes/Sorceror';
import { Warlock } from '../Assets/Classes/Warlock';
import { Wizard } from '../Assets/Classes/Wizard';


//define classes
var barbarian: Barbarian = new Barbarian();
var bard: Bard = new Bard();
var cleric: Cleric = new Cleric();
var druid: Druid = new Druid();
var fighter: Fighter = new Fighter();
var monk: Monk = new Monk();
var paladin: Paladin = new Paladin();
var ranger: Ranger = new Ranger();
var rogue: Rogue = new Rogue();
var sorceror: Sorceror = new Sorceror();
var warlock: Warlock = new Warlock();
var wizard: Wizard = new Wizard();


export const ClassCharData: Character[] = [


    //IMPORTANT! I NEED TO MAKE COPIES OF THESE WHEN USED, NOT GRAB THEM AND THEN SET THEIR VALUES DIFFERENTLY
    
    //simply list classes here
    barbarian,
    bard,
    cleric,
    druid,
    fighter,
    monk,
    paladin,
    ranger,
    rogue,
    sorceror,
    warlock,
    wizard
    
];