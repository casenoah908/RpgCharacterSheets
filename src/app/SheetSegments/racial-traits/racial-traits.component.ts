import { Component, OnInit } from '@angular/core';

import { Character } from '../../CharacterGen/Objects/character';
import { Race } from '../../CharacterGen/Objects/race';

import { GenerationService } from '../../CharacterGen/generation.service';

@Component({
  selector: 'app-racial-traits',
  templateUrl: './racial-traits.component.html',
  styleUrls: ['./racial-traits.component.css']
})
export class RacialTraitsComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;

  constructor(private generationService : GenerationService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();
  }

}
