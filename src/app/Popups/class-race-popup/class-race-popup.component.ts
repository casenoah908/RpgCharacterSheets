import { Component, OnInit,Inject,Input } from '@angular/core';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog'

import { RequirementsService } from '../../CreationRequirements/requirements.service';
import { Requirements } from '../../CreationRequirements/Requirements';
import { from } from 'rxjs';

// components
import { SkillsPopupComponent } from '../skills-popup/skills-popup.component'

@Component({
  selector: 'app-class-race-popup',
  templateUrl: './class-race-popup.component.html',
  styleUrls: ['./class-race-popup.component.css']
})
export class ClassRacePopupComponent implements OnInit {

  requirements : Requirements;
  selected : string = '';

  constructor(private requirementsService : RequirementsService, public thisDialogRef: MatDialogRef<ClassRacePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: string, public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  



  // submits class (and eventually race) and opens skills-popup
  submitClassRace(role){
    // submit class
    this.requirementsService.setReqClass(role);
    // use class to assign to personal requirements object
    this.requirements = this.requirementsService.getClassRequirements();
    let dialogRef = this.dialog.open(SkillsPopupComponent, {
      // size of popup
      width: '600px',
      // data that gets passed to popup (requirements object)
      data: this.requirements
    });
    this.thisDialogRef.close();
  }
    

}
