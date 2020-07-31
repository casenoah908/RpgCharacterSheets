import { Component, OnInit } from '@angular/core';

import { Character } from '../../CharacterGen/character';
import { Race } from '../../CharacterGen/race';

import { GenerationService } from '../../CharacterGen/generation.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;

  constructor(private generationService : GenerationService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();

  }

}
