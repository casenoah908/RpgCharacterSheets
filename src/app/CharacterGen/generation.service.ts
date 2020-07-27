import { Injectable } from '@angular/core';
import { Character } from './character'
import { ClassCharData } from './ClassCharData';

@Injectable({
    providedIn: "root",
})

export class GenerationService {

    currentClass: string = "";

    constructor(){}

    // Class Specific Data
    ClassData = ClassCharData;


    // Pass "menu" of requirements
    // searches through ClassCharData for a Character object that matches 
    // the class/role, and assigns it to a character variable that gets
    // returned
    getCharacter(){
        var character: Character; //This doesn't appear to make it void
        this.ClassData.forEach(item => {
            if(item.role == this.currentClass){
                character = item;
            }
        })
        return character;
    }
    // class is switched to role because class is a bad variable name in coding
    // sets the currentClass to the role that was selected by user
    setCharClass(role){
        this.currentClass = role;
    }

}