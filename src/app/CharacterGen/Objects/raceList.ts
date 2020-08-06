import { Race } from './race';

//import races
import { Dragonborn } from '../Assets/Races/Dragonborn';
import { Dwarf } from '../Assets/Races/Dwarf';
import { HillDwarf } from '../Assets/Races/HillDwarf';
import { MountainDwarf } from '../Assets/Races/MountainDwarf';
import { Elf } from '../Assets/Races/Elf';
import { HighElf } from '../Assets/Races/HighElf';
import { WoodElf } from '../Assets/Races/WoodElf';
import { Gnome } from '../Assets/Races/Gnome';
import { DeepGnome } from '../Assets/Races/DeepGnome';
import { RockGnome } from '../Assets/Races/RockGnome';
import { HalfElf } from '../Assets/Races/HalfElf';
import { Halfling } from '../Assets/Races/Halfling';
import { LightfootHalfling } from '../Assets/Races/LightfootHalfling';
import { StoutHalfling } from '../Assets/Races/StoutHalfling';
import { HalfOrc } from '../Assets/Races/HalfOrc';
import { Human } from '../Assets/Races/Human';
import { Tiefling } from '../Assets/Races/Tiefling';

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