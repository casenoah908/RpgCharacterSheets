import { Component, OnInit, Inject } from '@angular/core';

import { Character } from '../../CharacterGen/Objects/character';
import { Race } from '../../CharacterGen/Objects/race';

import { GenerationService } from '../../CharacterGen/generation.service';
import { RequirementsService } from '../../CreationRequirements/requirements.service';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
import { Requirements } from 'src/app/CreationRequirements/Requirements';

import { LevelUpPopupComponent } from '../../Components/Popups/LevelUps/level-up-popup/level-up-popup.component';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;
  requirements: Requirements;
  faPlusCircle = faPlusCircle;

  constructor(private generationService: GenerationService, public dialog: MatDialog) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();
  }

  levelUp(){
    let dialogRef = this.dialog.open(LevelUpPopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogRequirements: this.requirements,
        dialogCharacter: this.characterInfo
      }
    });
  }


}
