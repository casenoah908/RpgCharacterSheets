import { Component, OnInit,Inject,Input } from '@angular/core';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog'

//requirements
import { RequirementsService } from '../../CreationRequirements/requirements.service';
import { Requirements } from '../../CreationRequirements/Requirements';
import { from } from 'rxjs';

//character
import { GenerationService } from '../../CharacterGen/generation.service';
import { Character } from '../../CharacterGen/character';

// components
import { SkillsPopupComponent } from '../skills-popup/skills-popup.component'
import { ClassCharData } from '../../CharacterGen/ClassCharData';


@Component({
  selector: 'app-class-race-popup',
  templateUrl: './class-race-popup.component.html',
  styleUrls: ['./class-race-popup.component.css']
})
export class ClassRacePopupComponent implements OnInit {

  character : Character;
  requirements : Requirements;

  //character generation properties
  name : string = '';
  role : string = '';
  race : string = '';
  background : string = '';
  alignment : string = '';



  constructor(private generationService : GenerationService, private requirementsService : RequirementsService, public thisDialogRef: MatDialogRef<ClassRacePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: string, public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  



  // submits class (and eventually race) and opens skills-popup
  submitClassRace(role){
    // submit class
    this.requirementsService.setReqClass(role);
    // use class to assign to grab specific requirements object
    this.requirements = this.requirementsService.getClassRequirements();

    // now do the same but for a charData object
    //submit class
    this.generationService.setCharClass(role);
    // use class to grab specific character object
    this.character = this.generationService.getCharacter();
    // except now we have to assign the user input in this popup to their respective properties
    //This isnt working
    this.character.name = this.name;
    this.character.race = this.race;
    this.character.background = this.background;
    this.character.alignment = this.alignment;

    let dialogRef = this.dialog.open(SkillsPopupComponent, {
      // size of popup
      width: '600px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogRequirements: this.requirements,
        dialogCharacter: this.character
      }
    });
    this.thisDialogRef.close();
  }
    

}
