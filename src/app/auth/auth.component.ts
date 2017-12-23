import { element } from 'protractor';
import { DataService } from './../data.service';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  users: any[];
  status: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }


  @Output() authFlag = new EventEmitter<boolean>();

  // @ViewChild('username') username: ElementRef;
  // @ViewChild('password') password: ElementRef;

  username = 'mayank';
  password = 'mayank';


  ngOnInit() {
  }



  onSubmit(form: HTMLFormElement) {
    console.log('Submitted');
    console.log(form);
  }

  onSignIn() {

    this.dataService.login(this.username, this.password)
      .subscribe(status => {
        console.log(status);
        this.status = status;
      },
      error => {
        console.log(error);
      }
      );
    this.authFlag.emit(true);
    this.router.navigate(['toDoOption']);


  }

}
