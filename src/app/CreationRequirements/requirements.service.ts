import { Injectable } from '@angular/core';
import { Requirements } from './Requirements'
import { ClassRequirements } from './ReqList';

@Injectable({
    providedIn: "root",
})

export class RequirementsService {


    constructor(){}

    // Class Specific Reqs
    ClassReqs = ClassRequirements;


    // searches through ClassReqs for a Requirements object that matches 
    // the class/role/value, and assigns it to a requirements variable that gets
    // returned
    getClassRequirements(value: string){
        var requirements: Requirements; //This doesn't appear to make it void
        this.ClassReqs.forEach(item => {
            if(item.role == value){
                requirements = item;
            }
        })
        return requirements;
    }


}