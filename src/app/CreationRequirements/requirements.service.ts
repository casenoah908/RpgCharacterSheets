import { Injectable } from '@angular/core';
import { Requirements } from './Requirements'
import { ClassRequirements } from './ClassReq';

@Injectable({
    providedIn: "root",
})

export class RequirementsService {

    currentClass: string = "";

    constructor(){}

    // Class Specific Reqs
    ClassReqs = ClassRequirements;


    // Pass "menu" of requirements
    // searches through ClassReqs for a Requirements object that matches 
    // the class/role, and assigns it to a requirements variable that gets
    // returned
    getClassRequirements(){
        var requirements: Requirements; //This doesn't appear to make it void
        this.ClassReqs.forEach(item => {
            if(item.role == this.currentClass){
                requirements = item;
            }
        })
        return requirements;
    }
    // class is switched to role because class is a bad variable name in coding
    // sets the currentClass to the role that was selected by user
    setReqClass(role){
        this.currentClass = role;
    }

}