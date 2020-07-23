import { Component, OnInit } from '@angular/core';

import { RequirementsService } from '../CreationRequirements/requirements.service';


// popup
import {MatDialog} from '@angular/material/dialog'
import { ClassRacePopupComponent } from '../Popups/class-race-popup/class-race-popup.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dialogResult = "";

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  


  openDialog(): void{
    let dialogRef = this.dialog.open(ClassRacePopupComponent, {
      width: '600px',
      data: 'This text is passed into the popup component from the app component logic openDialog() function'
    });

      
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}');
      this.dialogResult = result;
    })
  }

}
