import { Component, OnInit } from '@angular/core';

import { Character } from '../../CharacterGen/Objects/character';
import { Race } from '../../CharacterGen/Objects/race';

import { GenerationService } from '../../CharacterGen/generation.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;

  constructor(private generationService : GenerationService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();
  }

}
