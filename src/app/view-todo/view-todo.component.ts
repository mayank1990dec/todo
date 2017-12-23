import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {

  userToDo: any[];
  status: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUserTodo()
      .subscribe((users: any[]) => {
        this.userToDo = users;
      },
      error => {
        console.log(error);
      }
      );
  }
}
