import { Component, OnInit, Inject } from '@angular/core';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
import { Character } from 'src/app/CharacterGen/Objects/character';

import { GenerationService } from '../../../../CharacterGen/generation.service';
import { Race } from 'src/app/CharacterGen/Objects/race';

@Component({
  selector: 'app-language-list-popup',
  templateUrl: './language-list-popup.component.html',
  styleUrls: ['./language-list-popup.component.css']
})
export class LanguageListPopupComponent implements OnInit {

  languages: Array<string> = ['Common','Dwarvish','Elvish','Giant','Gnomish','Goblin','Halfling','Orc','Abyssal','Celestial','Draconic','Deep Speech','Infernal','Primordial','Sylvan','Undercommon'];
  characterInfo: Character;
  raceInfo: Race;
  selectedLanguage: string;
  selectedRow: Number;

  constructor(public thisDialogRef: MatDialogRef<LanguageListPopupComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    this.characterInfo = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRace;
  }

  selectLanguage(value: string, index: Number){
    this.selectedLanguage = value;
    this.selectedRow = index;
  }

  addLanguage(){
    this.characterInfo.addLanguages(this.selectedLanguage);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.thisDialogRef.close();
  }

}
