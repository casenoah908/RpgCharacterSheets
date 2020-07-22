import { Component } from '@angular/core';

// popup
import {MatDialog} from '@angular/material/dialog'
import { PopupComponent } from './popup/popup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  title = 'rpg-character-sheet';
  dialogResult = "";
  constructor(public dialog: MatDialog){}

  openDialog(): void{
    let dialogRef = this.dialog.open(PopupComponent, {
      width: '600px',
      data: 'This text is passed into the popup component from the app component logic openDialog() function'
    });

      
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}');
      this.dialogResult = result;
    })
  }

  
}


