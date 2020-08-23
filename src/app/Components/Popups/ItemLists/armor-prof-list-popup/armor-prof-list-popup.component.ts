import { Component, OnInit, Inject } from '@angular/core';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
import { Character } from 'src/app/CharacterGen/Objects/character';

import { GenerationService } from '../../../../CharacterGen/generation.service';
import { Race } from 'src/app/CharacterGen/Objects/race';

@Component({
  selector: 'app-armor-prof-list-popup',
  templateUrl: './armor-prof-list-popup.component.html',
  styleUrls: ['./armor-prof-list-popup.component.css']
})
export class ArmorProfListPopupComponent implements OnInit {

  armorProfs: Array<string> = ['Light Armor','Medium Armor','Heavy Armor','Shields'];
  characterInfo: Character;
  raceInfo: Race;
  selectedArmorProf: string;
  selectedRow: Number;

  constructor(public thisDialogRef: MatDialogRef<ArmorProfListPopupComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    this.characterInfo = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRace;
  }

  selectArmorProf(value: string, index: Number){
    this.selectedArmorProf = value;
    this.selectedRow = index;
  }

  addArmorProf(){
    this.characterInfo.addArmorProf(this.selectedArmorProf.toLowerCase());
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.thisDialogRef.close();
  }

}
