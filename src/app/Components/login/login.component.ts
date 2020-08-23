import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { User } from '../../User';

import { DatabaseService } from '../../database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  users: User[];

  userFound: boolean = false;
  user: User;
  displayError: boolean = false;

  constructor(private router: Router, private http: HttpClient, private dataService: DatabaseService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.dataService.getUsers().subscribe(data =>{
      this.users = data;
    })
  }

  login(){
    //check user database for username and password
    for(let i=0; i<this.users.length; i++){
      if(this.users[i].username === this.username && this.users[i].password === this.password){
        this.userFound = true;
        this.user = this.users[i];
      }
    }
    if(this.userFound){
      this.dataService.holdInfo(this.user);
    this.router.navigateByUrl('userHome');
    }else{
      this.displayError = true;
    }
    
  }

  createAccount(){
    this.router.navigateByUrl('createAccount');
  }

}
