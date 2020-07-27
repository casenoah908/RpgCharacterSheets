import { Component, OnInit, Inject } from '@angular/core';
import { Requirements } from 'src/app/CreationRequirements/Requirements';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { from } from 'rxjs';
import { EquipmentPopupComponent } from '../equipment-popup/equipment-popup.component';

@Component({
  selector: 'app-skills-popup',
  templateUrl: './skills-popup.component.html',
  styleUrls: ['./skills-popup.component.css']
})
export class SkillsPopupComponent implements OnInit {

  // so my "data" is passed through popups, not property binding like cafe-ex-machina
  // so this probably isnt going to work with @Input
  // @Input() data: Requirements;

  requirements: Requirements;
  limit: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Requirements, public thisDialogRef: MatDialogRef<SkillsPopupComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.requirements = this.data;
    this.limit = Number(this.requirements.skills[0]); //This is the problem
  }

  checkCount: number = 0;
  checkLimit(event, checkBox){
    if(event.target.checked == true){
      if(this.checkCount < this.limit){
        this.checkCount++;
      }else{
        event.target.checked = false;
      }
    }else{
      this.checkCount--;
    }
  }

  openEquipmentPopup(){
    let dialogRef = this.dialog.open(EquipmentPopupComponent, {
      // size of popup
      width: '600px',
      // data that gets passed to popup (requirements object)
      data: this.requirements
    });
    this.thisDialogRef.close();
  }

}
