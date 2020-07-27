import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Requirements } from '../../CreationRequirements/Requirements';
import { from } from 'rxjs';

import { Level1PopupComponent } from '../level1-popup/level1-popup.component';



@Component({
  selector: 'app-equipment-popup',
  templateUrl: './equipment-popup.component.html',
  styleUrls: ['./equipment-popup.component.css']
})
export class EquipmentPopupComponent implements OnInit {

  requirements: Requirements;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Requirements, public thisDialogRef: MatDialogRef<EquipmentPopupComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.requirements = this.data;
  }

  openLevel1Popup(){
    let dialogRef = this.dialog.open(Level1PopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: this.requirements
    });
    this.thisDialogRef.close();
  }

  

}
