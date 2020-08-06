import { Race } from './race';

//import races
import { Dragonborn } from './Races/Dragonborn';
import { Dwarf } from './Races/Dwarf';
import { HillDwarf } from './Races/HillDwarf';
import { MountainDwarf } from './Races/MountainDwarf';
import { Elf } from './Races/Elf';
import { HighElf } from './Races/HighElf';
import { WoodElf } from './Races/WoodElf';
import { Gnome } from './Races/Gnome';
import { DeepGnome } from './Races/DeepGnome';
import { RockGnome } from './Races/RockGnome';
import { HalfElf } from './Races/HalfElf';
import { Halfling } from './Races/Halfling';
import { LightfootHalfling } from './Races/LightfootHalfling';
import { StoutHalfling } from './Races/StoutHalfling';
import { HalfOrc } from './Races/HalfOrc';
import { Human } from './Races/Human';
import { Tiefling } from './Races/Tiefling';

//create races
var dragonborn: Dragonborn = new Dragonborn("placeholder breath");
var dwarf: Dwarf = new Dwarf();
var hillDwarf: HillDwarf = new HillDwarf();
var mountainDwarf: MountainDwarf = new MountainDwarf();
var elf: Elf = new Elf();
var highElf: HighElf = new HighElf();
var woodElf: WoodElf = new WoodElf();
var gnome: Gnome = new Gnome();
var deepGnome: DeepGnome = new DeepGnome();
var rockGnome: RockGnome = new RockGnome();
var halfElf: HalfElf = new HalfElf([0,0,0,0,0,0],["placeholder skill proficiencies"]);
var halfling: Halfling = new Halfling();
var lightfootHalfling: LightfootHalfling = new LightfootHalfling();
var stoutHalfling: StoutHalfling = new StoutHalfling();
var halfOrc: HalfOrc = new HalfOrc();
var human: Human = new Human();
var tiefling: Tiefling = new Tiefling();

export const RaceList: Race[] = [

    //simply list races here:
    dragonborn,
    dwarf,
    hillDwarf,
    mountainDwarf,
    elf,
    highElf,
    woodElf,
    gnome,
    deepGnome,
    rockGnome,
    halfElf,
    halfling,
    lightfootHalfling,
    stoutHalfling,
    halfOrc,
    human,
    tiefling
]