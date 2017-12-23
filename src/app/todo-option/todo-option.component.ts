import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-option',
  templateUrl: './todo-option.component.html',
  styleUrls: ['./todo-option.component.css']
})
export class TodoOptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  onViewOrEdit() {
    this.router.navigate(['veiwToDos']);
  }

}
