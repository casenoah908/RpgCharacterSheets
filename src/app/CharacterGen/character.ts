import { Weapon } from "./weapon";
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';

export class Character{

    // constructor at bottom


    // ------ //
    // HEADER //
    // ------ //
    private name: string;
    getName(){
        return this.name;
    }
    setName(value: string){
        this.name = value;
    }

    private race: string;
    getRace(){
        return this.race;
    }
    setRace(value: string){
        this.race = value;
    }

    private role: string;
    getRole(){
        return this.role;
    }
    setRole(value: string){
        this.role = value;
    } 

    private level: number; //preset
    getLevel(){
        return this.level;
    }
    setLevel(value: number){
        this.level = value;
    }

    private xp: number; //preset
    getXp(){
        return this.xp;
    }
    setXp(value: number){
        this.xp = value;
    }

    private background: string;
    getBackground(){
        return this.background;
    }
    setBackground(value: string){
        this.background = value;
    }

    private alignment: string;
    getAlignment(){
        return this.alignment;
    }
    setAlignment(value: string){
        this.alignment = value;
    }


 
    // ------ //
    // VITALS //
    // ------ //
    private armor_class: number;
    getArmorClass(){
        return this.armor_class;
    }
    setArmorClass(value: number){
        this.armor_class = value;
    }

    private max_hp: number;
    getMaxHp(){
        return this.max_hp;
    }
    setMaxHp(value: number){
        this.max_hp = value;
    }

    private temp_hp: number;
    getTempHp(){
        return this.temp_hp;
    }
    setTempHp(value: number){
        this.temp_hp = value;
    }

    private current_hp: number;
    getCurrentHp(){
        return this.current_hp;
    }
    setCurrentHp(value: number){
        this.current_hp = value;
    }

    private initiative: number;
    getInitiative(){
        return this.initiative;
    }
    setInitiative(value: number){
        this.initiative = value;
    }

    private speed: number;
    getSpeed(){
        return this.speed;
    }
    setSpeed(value: number){
        this.speed = value;
    }

    private passive_wisdom: number;
    getPassiveWisdom(){
        return this.passive_wisdom;
    }
    setPassiveWisdom(value: number){
        this.passive_wisdom = value;
    }

    private hit_dice: number;
    getHitDice(){
        return this.hit_dice;
    }
    setHitDice(value: number){
        this.hit_dice = value;
    }


    // ------ //
    // SKILLS //
    // ------ //
    private proficiency_bonus: number;
    getProficiencyBonus(){
        return this.proficiency_bonus;
    }
    setProficiencyBonus(value: number){
        this.proficiency_bonus = value;
    }

    private strength: number;
    getStrength(){
        return this.strength;
    }
    setStrength(value: number){
        this.strength = value;
    }

    private dexterity: number;
    getDexterity(){
        return this.dexterity;
    }
    setDexterity(value: number){
        this.dexterity = value;
    }

    private constitution: number;
    getConstitution(){
        return this.constitution;
    }
    setConstitution(value: number){
        this.constitution = value;
    }

    private intelligence: number;
    getIntelligence(){
        return this.intelligence;
    }
    setIntelligence(value: number){
        this.intelligence = value;
    }

    private wisdom: number;
    getWisdom(){
        return this.wisdom;
    }
    setWisdom(value: number){
        this.wisdom = value;
    }

    private charisma: number;
    getCharisma(){
        return this.charisma;
    }
    setCharisma(value: number){
        this.charisma = value;
    }

    private skillProfs: Array<string>;
    getSkillProfs(){
        return this.skillProfs;
    }
    setSkillProfs(value: Array<string>){
        this.skillProfs = value;
    }

    private savingThrowProfs: Array<string>;
    getSavingThrowProfs(){
        return this.savingThrowProfs;
    }
    setSavingThrowProfs(value: Array<string>){
        this.savingThrowProfs = value;
    }



    // ------- //
    // WEAPONS //
    // ------- //
    private weapons: Array<Weapon>;
    getWeapons(){
        return this.weapons;
    }
    setWeapons(value: Array<Weapon>){
        this.weapons = value;
    }



    // --------- //
    // EQUIPMENT //
    // --------- //
    private platinum: number;
    getPlatinum(){
        return this.platinum;
    }
    setPlatinum(value: number){
        this.platinum = value;
    }

    private gold: number;
    getGold(){
        return this.gold;
    }
    setGold(value: number){
        this.gold = value;
    }

    private electrum: number;
    getElectrum(){
        return this.electrum;
    }
    setElectrum(value: number){
        this.electrum = value;
    }

    private silver: number;
    getSilver(){
        return this.silver;
    }
    setSilver(value: number){
        this.silver = value;
    }

    private copper: number;
    getCopper(){
        return this.copper;
    }
    setCopper(value: number){
        this.copper = value;
    }

    private armors: Array<string>;
    getArmors(){
        return this.armors;
    }
    setArmors(value: Array<string>){
        this.armors = value;
    }

    private packs: Array<string>;
    getPacks(){
        return this.packs;
    }
    setPacks(value: Array<string>){
        this.packs = value;
    }

    private languages: Array<string>;
    getLanguages(){
        return this.languages;
    }
    setLanguages(value: Array<string>){
        this.languages = value;
    }

    private others: Array<string>;
    getOthers(){
        return this.others;
    }
    setOthers(value: Array<string>){
        this.others = value;
    }

    private armorProfs: Array<string>;
    getArmorProfs(){
        return this.armorProfs;
    }
    setArmorProfs(value: Array<string>){
        this.armorProfs = value;
    }

    private weaponProfs: Array<string>;
    getWeaponProfs(){
        return this.weaponProfs;
    }
    setWeaponProfs(value: Array<string>){
        this.weaponProfs = value;
    }

    private toolProfs: Array<string>;
    getToolProfs(){
        return this.toolProfs;
    }
    setToolProfs(value: Array<string>){
        this.toolProfs = value;
    }

    private personalityTraits: string;
    getPersonalityTraits(){
        return this.personalityTraits;
    }
    setPersonalityTraits(value: string){
        this.personalityTraits = value;
    }

    private ideals: string;
    getIdeals(){
        return this.ideals;
    }
    setIdeals(value: string){
        this.ideals = value;
    }

    private bonds: string;
    getBonds(){
        return this.bonds;
    }
    setBonds(value: string){
        this.bonds = value;
    }

    private flaws: string;
    getFlaws(){
        return this.flaws;
    }
    setFlaws(value: string){
        this.flaws = value;
    }



    // ------------- //
    // RACIAL TRAITS //
    // ------------- //
    private racialTraits: Array<string>;
    getRacialTraits(){
        return this.racialTraits;
    }
    setRacialTraits(value: Array<string>){
        this.racialTraits = value;
    }

    private raceImageUrl: string;
    getImageUrl(){
        return this.raceImageUrl;
    }
    setImageUrl(value: string){
        this.raceImageUrl = value;
    }



    // ------ //
    // SPELLS //
    // ------ //
    private spellcastingAbility: string; 
    getSpellcastingAbility(){
        return this.spellcastingAbility;
    }
    setSpellcastingAbility(value: string){
        this.spellcastingAbility = value;
    }

    private spellSaveDC: number;
    getSpellSaveDC(){
        return this.spellSaveDC;
    }
    setSpellSaveDC(value: number){
        this.spellSaveDC = value;
    }

    private spellAttackBonus: number;
    getSpellAttackBonus(){
        return this.spellAttackBonus;
    }
    setSpellAttackBonus(value: number){
        this.spellAttackBonus = value;
    }

    private spellSlots: Array<number>;
    getSpellSlots(){
        return this.spellSlots;
    }
    setSpellSlots(value: Array<number>){
        this.spellSlots = value;
    }

    private spells: Array<string>;
    getSpells(){
        return this.spells;
    }
    setSpells(value: Array<string>){
        this.spells = value;
    }



    // --------------- //
    // CLASS ABILITIES //
    // --------------- //
    private levelAbilities: Array<string>;
    getLevelAbilities(){
        return this.levelAbilities;
    }
    setLevelAbilities(value: Array<string>){
        this.levelAbilities = value;
    } 

    

    
    constructor(role: string, hit_dice: number, savingThrowProfs: Array<string>, weaponProfs: Array<string>, armorProfs: Array<string>, toolProfs: Array<string>, spellcastingAbility: string){
        //comments by each property label what they are determined by. If none, it's a default value for everyone

        // Header Component
        this.name = ""; //user input
        this.race = ""; //user input
        this.role = role; //user input
        this.level = 1; 
        this.xp = 0;
        this.background = ""; //user input
        this.alignment = ""; //user input

        // Vitals Component
        this.armor_class = 10; //equipped armor
        this.max_hp = 0; //class and skills
        this.temp_hp = 0;
        this.current_hp = 0; //max_hp
        this.initiative = 0; //skills
        this.speed = 0; //race
        this.passive_wisdom = 0; //skills
        this.hit_dice = hit_dice; //class

        // // skills component
        this.proficiency_bonus = 2;
        this.strength = 0;//user input and race
        this.dexterity = 0;//user input and race
        this.constitution = 0;//user input and race
        this.intelligence = 0;//user input and race
        this.wisdom = 0;//user input and race
        this.charisma = 0;//user input and race
        this.skillProfs = [""]; //user input
        this.savingThrowProfs = savingThrowProfs; //class

        // Weapons component
        this.weapons = [""]; //user input

        // Equipment component
        this.platinum = 0;
        this.gold = 0;
        this.electrum = 0;
        this.silver  = 0;
        this.copper = 0;
        this.armors = [""]; // user input
        this.packs = [""]; //user input
        this.languages = [""]; //race
        this.others = [""];
        this.armorProfs = armorProfs; //class
        this.weaponProfs = weaponProfs; //class
        this.toolProfs = toolProfs; //class
        this.personalityTraits = "";
        this.ideals = "";
        this.bonds = "";
        this.flaws = "";

        // Racial traits component
        this.racialTraits = [""]; //race
        this.raceImageUrl = ""; //race

        // Spells component
        this.spellcastingAbility = spellcastingAbility;
        this.spellSaveDC = 0; // skills and spellcasting ability
        this.spellAttackBonus = 0; //skills and spellcasting ability
        this.spellSlots = [0,0,0,0,0,0,0,0,0]; //level
        this.spells = [""]; //user input post creation

        // Class abilities component
        this.levelAbilities = [""]; //user input

    }
    

}

