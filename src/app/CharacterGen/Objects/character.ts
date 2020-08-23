import { Weapon } from "../Assets/Items/weapon";
import { Armor } from '../Assets/Items/armor';
import { Spell } from '../Assets/Spells/Spell';
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';
import { stringify } from '@angular/compiler/src/util';

import { ClassTrait } from './classTrait';
import { ArmorsList } from '../Assets/Items/armorsList';

export class Character {

    // constructor at bottom

    private userId: number;
    getUser(){
        return this.userId;
    }
    setUser(value: number){
        this.userId = value;
    }
    // ------ //
    // HEADER //
    // ------ //
    private name: string;
    getName() {
        return this.name;
    }
    setName(value: string) {
        this.name = value;
    }

    private race: string;
    getRace() {
        return this.race;
    }
    setRace(value: string) {
        this.race = value;
    }

    private role: string;
    getRole() {
        return this.role;
    }
    setRole(value: string) {
        this.role = value;
    }

    private classImageUrl: string;
    getClassImageUrl(){
        return this.classImageUrl;
    }

    private level: number; //preset
    getLevel() {
        return this.level;
    }
    setLevel(value: number) {
        this.level = value;
    }

    private xp: number; //preset
    getXp() {
        return this.xp;
    }
    setXp(value: number) {
        this.xp = value;
    }

    private background: string;
    getBackground() {
        return this.background;
    }
    setBackground(value: string) {
        this.background = value;
    }

    private alignment: string;
    getAlignment() {
        return this.alignment;
    }
    setAlignment(value: string) {
        this.alignment = value;
    }



    // ------ //
    // VITALS //
    // ------ //
    private armor_class: number;
    getArmorClass() {
        return this.armor_class;
    }
    setArmorClass(value: number) {
        this.armor_class = value;
    }

    private equippedArmor: Armor;
    getEquippedArmor() {
        return this.equippedArmor;
    }
    setEquippedArmor(value: Armor) {
        this.equippedArmor = value;
    }

    private max_hp: number;
    getMaxHp() {
        return this.max_hp;
    }
    setMaxHp(value: number) {
        this.max_hp = value;
    }

    private temp_hp: number;
    getTempHp() {
        return this.temp_hp;
    }
    setTempHp(value: number) {
        this.temp_hp = value;
    }

    private current_hp: number;
    getCurrentHp() {
        return this.current_hp;
    }
    setCurrentHp(value: number) {
        this.current_hp = value;
    }

    private initiative: number;
    getInitiative() {
        return this.initiative;
    }
    setInitiative(value: number) {
        this.initiative = value;
    }

    private speed: number;
    getSpeed() {
        return this.speed;
    }
    setSpeed(value: number) {
        this.speed = value;
    }

    private passive_wisdom: number;
    getPassiveWisdom() {
        return this.passive_wisdom;
    }
    setPassiveWisdom(value: number) {
        this.passive_wisdom = value;
    }

    private hit_dice: number;
    getHitDice() {
        return this.hit_dice;
    }
    setHitDice(value: number) {
        this.hit_dice = value;
    }

    private inpsired: boolean;
    getInspired(){
        return this.inpsired;
    }
    setInspired(value: boolean){
        this.inpsired = value;
    }


    // ------ //
    // SKILLS //
    // ------ //
    private proficiency_bonus: number;
    getProficiencyBonus(){
        return this.proficiency_bonus;
    }
    setProficiencyBonus(value: number) {
        this.proficiency_bonus = value;
    }

    private strength: number;
    getStrength() {
        return this.strength;
    }
    setStrength(value: number) {
        this.strength = value;
    }

    private dexterity: number;
    getDexterity() {
        return this.dexterity;
    }
    setDexterity(value: number) {
        this.dexterity = value;
    }

    private constitution: number;
    getConstitution() {
        return this.constitution;
    }
    setConstitution(value: number) {
        this.constitution = value;
    }

    private intelligence: number;
    getIntelligence() {
        return this.intelligence;
    }
    setIntelligence(value: number) {
        this.intelligence = value;
    }

    private wisdom: number;
    getWisdom() {
        return this.wisdom;
    }
    setWisdom(value: number) {
        this.wisdom = value;
    }

    private charisma: number;
    getCharisma() {
        return this.charisma;
    }
    setCharisma(value: number) {
        this.charisma = value;
    }

    private skillProfs: Array<string>;
    getSkillProfs() {
        return this.skillProfs;
    }
    addSkillProfs(value: string) {
        this.skillProfs.push(value);
    }
    removeSkillProfs(value: string) {
        var currentProf: string;
        var newProfs: Array<string> = [];
        //go through entire temporary skillProfs
        for(let i=0; i<this.skillProfs.length+2; i++) {
            currentProf = this.skillProfs.pop();
            //current prof is to be removed,
            if (currentProf == value) {
                //dont push into new list
            } else { //if current prof isnt to be removed
                //push currentProf to new list
                newProfs.push(currentProf);
            }
        }
        //reset skillProfs to newProfs list
        this.skillProfs = newProfs;
    }

    private savingThrowProfs: Array<string>;
    getSavingThrowProfs() {
        return this.savingThrowProfs;
    }
    setSavingThrowProfs(value: Array<string>) {
        this.savingThrowProfs = value;
    }



    // ------- //
    // WEAPONS //
    // ------- //
    private weapons: Array<Weapon>;
    getWeapons() {
        return this.weapons;
    }
    clearWeapons() {
        this.weapons = [];
    }
    addWeapon(value: Weapon) {
        this.weapons.push(value);
    }
    removeWeapon(value: Weapon) {
        var removed: boolean = false;
        var currentWeapon: Weapon;
        var newWeapon: Array<Weapon> = [];
        //go through entire temporary armors
        for(let i=0; i<this.weapons.length; i++) {
            currentWeapon = this.weapons.pop();
            //current prof is to be removed,
            if ((currentWeapon == value) && !removed) {
                //dont push into new list
                removed = true;
            } else { //if current prof isnt to be removed
                //push currentProf to new list
                newWeapon.push(currentWeapon);
            }
        }
        //reset skillProfs to newProfs list
        this.weapons = newWeapon;
    }

    private attackBonuses: Array<number>;
    getAttackBonuses(){
        return this.attackBonuses;
    }
    setAttackBonuses(value: Array<number>){
        this.attackBonuses = value;
    }

    private damageBonuses: Array<number>;
    getDamageBonuses(){
        return this.damageBonuses;
    }
    setDamageBonuses(value: Array<number>){
        this.damageBonuses = value;
    }



    // --------- //
    // EQUIPMENT //
    // --------- //
    private platinum: number;
    getPlatinum() {
        return this.platinum;
    }
    setPlatinum(value: number) {
        this.platinum = value;
    }

    private gold: number;
    getGold() {
        return this.gold;
    }
    setGold(value: number) {
        this.gold = value;
    }

    private electrum: number;
    getElectrum() {
        return this.electrum;
    }
    setElectrum(value: number) {
        this.electrum = value;
    }

    private silver: number;
    getSilver() {
        return this.silver;
    }
    setSilver(value: number) {
        this.silver = value;
    }

    private copper: number;
    getCopper() {
        return this.copper;
    }
    setCopper(value: number) {
        this.copper = value;
    }

    private armors: Array<Armor>;
    getArmors() {
        return this.armors;
    }
    clearArmors() {
        this.armors = [];
    }
    addArmor(value: Armor) {
        this.armors.push(value);
    }

    private packs: Array<string>;
    getPacks() {
        return this.packs;
    }
    clearPacks() {
        this.packs = [];
    }
    addPack(value: string) {
        this.packs.push(value);
    }

    private languages: Array<string>;
    getLanguages() {
        return this.languages;
    }
    setLanguages(value: Array<string>) {
        this.languages = value;
    }
    addLanguages(value: string){
        this.languages.push(value);
    }

    private others: Array<string>;
    getOthers() {
        return this.others;
    }
    clearOthers(){
        this.others = [];
    }
    addOthers(value: string) {
        this.others.push(value);
    }

    private armorProfs: Array<string>;
    getArmorProfs() {
        return this.armorProfs;
    }
    setArmorProfs(value: Array<string>) {
        this.armorProfs = value;
    }
    addArmorProf(value: string){
        this.armorProfs.push(value);
    }

    private weaponProfs: Array<string>;
    getWeaponProfs() {
        return this.weaponProfs;
    }
    clearWeaponProfs(){
        this.weaponProfs = [];
    }
    setWeaponProfs(value: Array<string>) {
        this.weaponProfs = value;
    }
    addWeaponProf(value: string){
        this.weaponProfs.push(value);
    }

    private toolProfs: Array<string>;
    getToolProfs() {
        return this.toolProfs;
    }
    setToolProfs(value: Array<string>) {
        this.toolProfs = value;
    }
    addToolProf(value: string){
        this.toolProfs.push(value);
    }

    private personalityTraits: string;
    getPersonalityTraits() {
        return this.personalityTraits;
    }
    setPersonalityTraits(value: string) {
        this.personalityTraits = value;
    }

    private ideals: string;
    getIdeals() {
        return this.ideals;
    }
    setIdeals(value: string) {
        this.ideals = value;
    }

    private bonds: string;
    getBonds() {
        return this.bonds;
    }
    setBonds(value: string) {
        this.bonds = value;
    }

    private flaws: string;
    getFlaws() {
        return this.flaws;
    }
    setFlaws(value: string) {
        this.flaws = value;
    }



    // ------------- //
    // RACIAL TRAITS //
    // ------------- //
    private racialTraits: Array<string>;
    getRacialTraits() {
        return this.racialTraits;
    }
    setRacialTraits(value: Array<string>) {
        this.racialTraits = value;
    }

    private raceImageUrl: string;
    getImageUrl() {
        return this.raceImageUrl;
    }
    setImageUrl(value: string) {
        this.raceImageUrl = value;
    }



    // ------ //
    // SPELLS //
    // ------ //
    private spellcastingAbility: string;
    getSpellcastingAbility() {
        return this.spellcastingAbility;
    }
    setSpellcastingAbility(value: string) {
        this.spellcastingAbility = value;
    }

    private spellSaveDC: number;
    getSpellSaveDC() {
        return this.spellSaveDC;
    }
    setSpellSaveDC(value: number) {
        this.spellSaveDC = value;
    }

    private spellAttackBonus: number;
    getSpellAttackBonus() {
        return this.spellAttackBonus;
    }
    setSpellAttackBonus(value: number) {
        this.spellAttackBonus = value;
    }

    //(contains cantrips known, spells known, and spell slots)
    private spellTable: Array<Array<number>>;
    getSpellTable() {
        return this.spellTable;
    }
    setSpellTable(value: Array<Array<number>>) {
        this.spellTable = value;
    }

    private spells: Array<Array<Spell>>;
    getSpells() {
        return this.spells;
    }
    setSpells(value: Array<Array<Spell>>) {
        this.spells = value;
    }
    addSpell(value: Spell, index: number){
        this.spells[index].push(value);
    }

    private slots1: number;
    getSlots1(){
        return this.slots1;
    }
    setSlots1(value: number){
        this.slots1 = value;
    }

    private slots2: number;
    getSlots2(){
        return this.slots2;
    }
    setSlots2(value: number){
        this.slots2 = value;
    }
    private slots3: number;
    getSlots3(){
        return this.slots3;
    }
    setSlots3(value: number){
        this.slots3 = value;
    }
    private slots4: number;
    getSlots4(){
        return this.slots4;
    }
    setSlots4(value: number){
        this.slots4 = value;
    }
    private slots5: number;
    getSlots5(){
        return this.slots5;
    }
    setSlots5(value: number){
        this.slots5 = value;
    }
    private slots6: number;
    getSlots6(){
        return this.slots6;
    }
    setSlots6(value: number){
        this.slots6 = value;
    }
    private slots7: number;
    getSlots7(){
        return this.slots7;
    }
    setSlots7(value: number){
        this.slots7 = value;
    }
    private slots8: number;
    getSlots8(){
        return this.slots8;
    }
    setSlots8(value: number){
        this.slots8 = value;
    }
    private slots9: number;
    getSlots9(){
        return this.slots9;
    }
    setSlots9(value: number){
        this.slots9 = value;
    }



    // --------------- //
    // CLASS ABILITIES //
    // --------------- //
    // private levelAbilities: Array<string>;
    // getLevelAbilities() {
    //     return this.levelAbilities;
    // }
    // clearLevelAbilities() {
    //     this.levelAbilities = [];
    // }
    // addLevelAbility(value: string) {
    //     this.levelAbilities.push(value);
    // }

    private classTraits: Array<ClassTrait>;
    getClassTraits() {
        return this.classTraits;
    }
    clearClassTraits(){
        this.classTraits = [];
    }
    addClassTraits(value: ClassTrait){
        this.classTraits.push(value);
    }





    constructor(role: string, classImageUrl: string, hit_dice: number, armors: Array<Armor>, weapons: Array<Weapon>, packs: Array<string>, others: Array<string>, savingThrowProfs: Array<string>, weaponProfs: Array<string>, armorProfs: Array<string>, toolProfs: Array<string>, spellcastingAbility: string, spellTable: Array<Array<number>>) {
        //comments by each property label what they are determined by. If none, it's a default value for everyone
        this.userId = null;
        // Header Component (COMPLETE)
        this.name = ""; //user input
        this.race = ""; //user input
        this.role = role; //user input
        this.classImageUrl = classImageUrl;
        this.level = 1;
        this.xp = 0;
        this.background = ""; //user input
        this.alignment = ""; //user input

        // Vitals Component
        this.armor_class = 10; //equipped armor
        this.equippedArmor = ArmorsList[0]; //equipment user input, default is unarmored
        this.max_hp = 0; //class and skills
        this.temp_hp = 0;
        this.current_hp = 0; //max_hp
        this.initiative = 0; //skillsgx
        this.speed = 0; //race
        this.passive_wisdom = 0; //skills
        this.hit_dice = hit_dice; //class
        this.inpsired = false; //user input

        // // skills component
        this.proficiency_bonus = 2;
        this.strength = 0;//user input and race
        this.dexterity = 0;//user input and race
        this.constitution = 0;//user input and race
        this.intelligence = 0;//user input and race
        this.wisdom = 0;//user input and race
        this.charisma = 0;//user input and race
        this.skillProfs = []; //user input
        this.savingThrowProfs = savingThrowProfs; //class

        // Weapons component
        this.weapons = weapons; //user input
        this.attackBonuses = [];
        this.damageBonuses = [];

        // Equipment component
        this.platinum = 0;
        this.gold = 0;
        this.electrum = 0;
        this.silver = 0;
        this.copper = 0;
        this.armors = armors; // user input
        this.packs = packs; //user input
        this.languages = []; //race
        this.others = others;
        this.armorProfs = armorProfs; //class
        this.weaponProfs = weaponProfs; //class
        this.toolProfs = toolProfs; //class
        this.personalityTraits = "";
        this.ideals = "";
        this.bonds = "";
        this.flaws = "";

        // Racial traits component
        this.racialTraits = []; //race
        this.raceImageUrl = ""; //race

        // Spells component
        this.spellcastingAbility = spellcastingAbility;
        this.spellSaveDC = 0; // skills and spellcasting ability
        this.spellAttackBonus = 0; //skills and spellcasting ability
        this.spellTable = spellTable; //level (contains cantrips known, spells known, and spell slots)
        this.spells = [[],[],[],[],[],[],[],[],[],[]]; //user input post creation
        this.slots1 = 0;
        this.slots2 = 0;
        this.slots3 = 0;
        this.slots4 = 0;
        this.slots5 = 0;
        this.slots6 = 0;
        this.slots7 = 0;
        this.slots8 = 0;
        this.slots9 = 0;

        // Class abilities component
        this.classTraits = []; //user input

    }



}

