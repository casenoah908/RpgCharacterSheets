import { Component, OnInit,Inject } from '@angular/core';
import { Requirements } from 'src/app/CreationRequirements/Requirements';

import { Character } from '../../CharacterGen/character';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { from } from 'rxjs';

@Component({
  selector: 'app-level1-popup',
  templateUrl: './level1-popup.component.html',
  styleUrls: ['./level1-popup.component.css']
})
export class Level1PopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  requirements: Requirements;
  character: Character;

  ngOnInit(): void {
    this.requirements = this.data.dialogRequirements;
    this.character = this.data.dialogCharacter;
  }

  

}
