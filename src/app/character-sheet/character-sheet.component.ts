import { Component, OnInit } from '@angular/core';
import { Character } from '../CharacterGen/character';
import { Race } from '../CharacterGen/race';

//router
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
