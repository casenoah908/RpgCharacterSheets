import { Component, OnInit } from '@angular/core';

import { Character } from '../../CharacterGen/character';
import { Race } from '../../CharacterGen/race';

//requirements
import { ClassRequirements } from '../../CreationRequirements/ClassReq';
import { Requirements } from '../../CreationRequirements/Requirements';
import { RequirementsService } from '../../CreationRequirements/requirements.service';

import { ClassTrait } from '../../CharacterGen/classTrait';

import { GenerationService } from '../../CharacterGen/generation.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-class-traits',
  templateUrl: './class-traits.component.html',
  styleUrls: ['./class-traits.component.css']
})
export class ClassTraitsComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;
  requirements: Requirements;
  classTraits: Array<ClassTrait>;

  constructor(private generationService : GenerationService, private requirementsService: RequirementsService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();

    //set class for requirements
    this.requirementsService.setReqClass(this.characterInfo.getRole());
    this.requirements = this.requirementsService.getClassRequirements();
    this.classTraits = [];
    for(let i=0; i<this.requirements.level1Header.length; i++){
      var newTrait: ClassTrait = {header: this.requirements.level1Header[i], description: this.requirements.level1Desc[i], choice: this.characterInfo.getLevelAbilities()[i]};
      // var newTrait: ClassTrait = {header: "Header", description: "Description", choice: "Choice"};
      this.classTraits.push(newTrait);
    }
  }

}
