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
  selector: 'app-spell-detail-popup',
  templateUrl: './spell-detail-popup.component.html',
  styleUrls: ['./spell-detail-popup.component.css']
})
export class SpellDetailPopupComponent implements OnInit {

  spell: Spell;

  constructor(public thisDialogRef: MatDialogRef<SpellDetailPopupComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    this.spell = this.data.dialogSpell;
  }

}
