import { Component, OnInit } from '@angular/core';

import { Character } from '../../CharacterGen/character';
import { Race } from '../../CharacterGen/race';

import { GenerationService } from '../../CharacterGen/generation.service';

@Component({
  selector: 'app-racial-traits',
  templateUrl: './racial-traits.component.html',
  styleUrls: ['./racial-traits.component.css']
})
export class RacialTraitsComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;
  test: string;

  constructor(private generationService : GenerationService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();
    this.test = this.raceInfo.traits[0].header;
  }

}
