import { Race } from './race';

export const RaceList: Race[] = [
    //Elf (base)
    {
        name: "Elf",
        abilityScoreIncrease: [0,2,0,0,0,0],
        age: "Although elves reach physical maturity at about the same age as Humans, the elven understanding of Adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims Adulthood and an adult name around the age of 100 and can live to be 750 years old.",
        size: "Medium size, 5 to 6 feet tall",
        speed: 30,
        languages: ["Common","Elvish"],
        skillProficiencies: ["Perception"],
        weaponProficiencies: [],
        armorProficiencies: [],
        traitHeaders: ["Darkvision", "Keen Senses","Fey Ancestry","Trance"],
        traitDescriptions: ["Accustomed to twilit forests and the night sky, you have superior vision in dark and dim Conditions. You can see in dim light within 60 feet of you as if it were bright light, and in Darkness as if it were dim light. You can’t discern color in Darkness, only Shades of Gray.",
                            "You have proficiency in the Perception skill.","You have advantage on Saving Throws against being Charmed, and magic can’t put you to sleep.",
                            "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After Resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
                            ],
        raceImageUrl: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/639/420/618/636287075350739045.png'
    },
    //High Elf
    {
        name: "High Elf",
        abilityScoreIncrease: [0,2,0,1,0,0],
        age: "Although elves reach physical maturity at about the same age as Humans, the elven understanding of Adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims Adulthood and an adult name around the age of 100 and can live to be 750 years old.",
        size: "Medium size, 5 to 6 feet tall",
        speed: 30,
        languages: ["Common","Elvish","One Extra of Your Choice"],
        skillProficiencies: ["Perception"],
        weaponProficiencies: ["Longsword","Shortsword","Shortbow","Longbow"],
        armorProficiencies: [],
        traitHeaders: ["Darkvision", "Keen Senses","Fey Ancestry","Trance","Elf Weapon Training","Cantrip","Extra Language"],
        traitDescriptions: ["Accustomed to twilit forests and the night sky, you have superior vision in dark and dim Conditions. You can see in dim light within 60 feet of you as if it were bright light, and in Darkness as if it were dim light. You can’t discern color in Darkness, only Shades of Gray.",
                            "You have proficiency in the Perception skill.","You have advantage on Saving Throws against being Charmed, and magic can’t put you to sleep.",
                            "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After Resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
                            "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
                            "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.","You can speak, read, and wirte one extra language of your choice."],
        raceImageUrl: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/639/420/618/636287075350739045.png'
    }
]