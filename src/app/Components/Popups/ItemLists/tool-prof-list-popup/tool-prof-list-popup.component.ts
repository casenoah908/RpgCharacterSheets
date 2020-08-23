import { Component, OnInit, Inject } from '@angular/core';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
import { Character } from 'src/app/CharacterGen/Objects/character';

import { GenerationService } from '../../../../CharacterGen/generation.service';
import { Race } from 'src/app/CharacterGen/Objects/race';

@Component({
  selector: 'app-tool-prof-list-popup',
  templateUrl: './tool-prof-list-popup.component.html',
  styleUrls: ['./tool-prof-list-popup.component.css']
})
export class ToolProfListPopupComponent implements OnInit {

  toolProfs: Array<string> = ["Alchemist's supplies","Brewer's supplies","Calligrapher's supplies",
  "Carpenter's tools","Cartographer's tools","Cobbler's tools","Cook's utensils","Glassblower's tools","Jeweler's tools","Leatherworker's tools","Mason's tools",
  "Painter's supplies","Potter's supplies","Smith's tools","Tinker's tools","Weaver's tools","Woodcarver's tools",
  "Dice set","Playing card set","Bagpipes","Drum","Dulcimer","Flute","Lute","Lyre","Horn","Pan flute","Shawm","Viol","Navigator's tools","Thieves' tools",
  "Artisan's tools","Disguise kit","Forgery kit","Herbalism kit","Poisoner's kit"];
  characterInfo: Character;
  raceInfo: Race;
  selectedToolProf: string;
  selectedRow: Number;

  constructor(public thisDialogRef: MatDialogRef<ToolProfListPopupComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    this.characterInfo = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRace;
  }

  selectToolProf(value: string, index: Number){
    this.selectedToolProf = value;
    this.selectedRow = index;
  }

  addToolProf(){
    this.characterInfo.addToolProf(this.selectedToolProf.toLowerCase());
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.thisDialogRef.close();
  }

}
