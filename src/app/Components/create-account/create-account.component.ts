import { Component, OnInit } from '@angular/core';

import { User } from '../../User';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { DatabaseService } from '../../database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  username: string;
  password: string;
  password2: string;
  invalidPass: boolean = false;
  invalidUser: boolean = false;
  invalidInput: boolean = false;

  users: User[];
  id;

  constructor(private router: Router, private http: HttpClient, private dataService: DatabaseService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.dataService.getUsers().subscribe(data =>{
      this.users = data;
      this.id = this.users.length;
    })
  }

  createAccount() {
    //check passwords
    var passwordsMatch: boolean = false;
    if(this.password === this.password2){
      passwordsMatch = true;
    }
    //check for username taken
    var usernameTaken: boolean = false;
    for(let i=0; i<this.users.length; i++){
      if(this.users[i].username === this.username){
        usernameTaken = true;
      }
    }
    //check for empty input
    var emptyInput: boolean = false;
    if(this.username == null){
      emptyInput = true;
    }
    if(this.password == null){
      emptyInput = true;
    }
    if(this.password2 == null){
      emptyInput = true;
    }

    if (passwordsMatch && !usernameTaken && !emptyInput) {
      //create user
      const user: User = { 
        id: this.id++, 
        username: this.username, 
        password: this.password
      };
      //register account in database.service
      this.dataService.addUser(user).subscribe(data => {
        console.log(data);
        this.fetchData();
      })
      //make a hold info method for travelling from here to home
      this.dataService.holdInfo(user);
      //navigate to user's home
      this.router.navigateByUrl('userHome');
    } else if(!passwordsMatch) {
      //if passwords don't match, let user know
      this.invalidPass = true;
    } else if(usernameTaken){
      this.invalidUser = true;
    } else if(emptyInput){
      this.invalidInput = true;
    }
  }

}
