import { Component, OnInit } from '@angular/core';

import { Character } from '../../CharacterGen/Objects/character';
import { Race } from '../../CharacterGen/Objects/race';

//requirements
import { ClassRequirements } from '../../CreationRequirements/ReqList';
import { Requirements } from '../../CreationRequirements/Requirements';
import { RequirementsService } from '../../CreationRequirements/requirements.service';

import { ClassTrait } from '../../CharacterGen/Objects/classTrait';

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

  constructor(private generationService : GenerationService, private requirementsService: RequirementsService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();
  }

}
