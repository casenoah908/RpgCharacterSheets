import { Component, OnInit, Inject } from '@angular/core';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
import { Character } from 'src/app/CharacterGen/Objects/character';

import { GenerationService } from '../../../../CharacterGen/generation.service';
import { Race } from 'src/app/CharacterGen/Objects/race';
import { Spell } from '../../../../CharacterGen/Assets/Spells/Spell';
import { SpellList } from '../../../../CharacterGen/Assets/Spells/SpellList';

@Component({
  selector: 'app-spells-popup',
  templateUrl: './spells-popup.component.html',
  styleUrls: ['./spells-popup.component.css']
})
export class SpellsPopupComponent implements OnInit {

  spellList = SpellList;
  spells: Spell[];
  characterInfo: Character;
  raceInfo: Race;
  selectedSpell: Spell;
  selectedRow: Number;
  spellLevel: number;

  constructor(public thisDialogRef: MatDialogRef<SpellsPopupComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    this.characterInfo = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRace;
    this.spellLevel = this.data.dialogSpellLevel;
    this.spells = this.spellList[this.spellLevel];
  }

  selectSpell(value: Spell, index: Number){
    this.selectedSpell = value;
    console.log(this.selectedSpell.name);
    this.selectedRow = index;
  }

  addSpell(){
    this.characterInfo.addSpell(this.selectedSpell, this.spellLevel);
    console.log(this.selectedSpell.name);
    console.log(this.spellLevel);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.thisDialogRef.close();
  }

}
