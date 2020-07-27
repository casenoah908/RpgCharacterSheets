import { Character } from './character';

export const ClassCharData: Character[] = [


    //IMPORTANT! I NEED TO MAKE COPIES OF THESE WHEN USED, NOT GRAB THEM AND THEN SET THEIR VALUES DIFFERENTLY

    // RANGER
    {
        name: "",
        race: "",
        role: "ranger",
        level: 1,
        xp: 0,
        background: "",
        alignment: "",
        // Vitals Component
        armor_class: 10,
        max_hp: 0,
        temp_hp: 0,
        current_hp: 0,
        initiative: 0,
        speed: 0,
        passive_wisdom: 0,
        hit_dice: 0,
        // skills component
        proficiency_bonus: 2,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        inteligence: 0,
        wisdom: 0,
        charisma: 0,
        skillProfs: [""],
        // weapons component
        weapons: [""],
        // Equipment
        platinum: 0,
        gold: 0,
        electrum: 0,
        silver: 0,
        copper: 0,
        armors: [""],
        packs: [""],
        languages: [""],
        others: [""],
        armorProfs: [""],
        weaponProfs: [""],
        toolProfs: [""],
        personalityTraits: "", //preset
        ideals: "", //preset
        bonds: "", //preset
        flaws: "", //preset
        //racial traits
        racialTraits: [""],
        raceImageUrl: "",
        // Spells component
        spelcastingAbility: "WIS",
        spellSaveDC: 0,
        spellAttackBonus: 0,
        spellSlots: [0],
        spells: [""],
        // class abilities
        levelAbilities: [""],
    },


    // NEXT CLASS

    //{
        //header component
        // name: string;
        // race: string;
        // class: string; 
        // level: number; //done
        // xp: number; //done
        // background: string;
        // alignment: string;
        // // Vitals Component
        // armor_class: number;
        // max_hp: number;
        // temp_hp: number; //done
        // current_hp: number;
        // initiative: number;
        // speed: number;
        // passive_wisdom: number;
        // hit_dice: number;
        // // skills component
        // proficiency_bonus: number;
        // strength: number;
        // dexterity: number;
        // constitution: number;
        // inteligence: number;
        // wisdom: number;
        // charisma: number;
        // proficiencies: Array<string>;
        // // weapons component
        // weapons: Array<Weapon>;
        // // Equipment
        // platinum: number;
        // gold: number;
        // electrum: number;
        // silver: number;
        // copper: number;
        // armors: Array<string>;
        // packs: Array<string>;
        // languages: Array<string>;
        // others: Array<string>;
        // armorProfs: Array<string>;
        // weaponProfs: Array<string>;
        // toolProfs: Array<string>;
        // personalityTraits: string; //preset
        // ideals: string; //preset
        // bonds: string; //preset
        // flaws: string; //preset
        // //racial traits
        // racialTraits: Array<string>;
        // raceImageUrl: string;
        // // Spells component
        // spelcastingAbility: string; 
        // spellSaveDC: number;
        // spellAttackBonus: number;
        // spellSlots: Array<number>; 
        // spells: Array<string>;
        // // class abilities
        // levelAbilities: Array<string>;
    //}


]