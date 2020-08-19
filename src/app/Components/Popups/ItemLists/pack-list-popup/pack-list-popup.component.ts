import { Component, OnInit, Inject } from '@angular/core';

import { Pack } from '../../../../CharacterGen/Assets/Items/pack';
import { PacksList } from '../../../../CharacterGen/Assets/Items/packsList';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
import { Character } from 'src/app/CharacterGen/Objects/character';

import { GenerationService } from '../../../../CharacterGen/generation.service';
import { Race } from 'src/app/CharacterGen/Objects/race';

@Component({
  selector: 'app-pack-list-popup',
  templateUrl: './pack-list-popup.component.html',
  styleUrls: ['./pack-list-popup.component.css']
})
export class PackListPopupComponent implements OnInit {

  packList: Array<Pack> = PacksList;
  characterInfo: Character;
  raceInfo: Race;
  selectedPack: Pack;
  selectedRow: Number;

  constructor(public thisDialogRef: MatDialogRef<PackListPopupComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    this.characterInfo = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRace;
  }

  selectPack(value: Pack, index: Number){
    this.selectedPack = value;
    this.selectedRow = index;
  }

  addPack(){
    this.characterInfo.addPack(this.selectedPack.name);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.thisDialogRef.close();
  }

}
