import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  ToDo: any;

  _id: string;
  hasAttachment: string;
  isDone: string;
  password: string;
  todo: string;
  username: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.dataService.getToDoById(id)
      .subscribe(
      (todo: any) => {
        this.ToDo = todo;
        console.log(this.ToDo);
        this._id = this.ToDo._id;
        this.hasAttachment = this.ToDo.hasAttachment;
        this.isDone = this.ToDo.isDone;
        this.password = this.ToDo.password;
        this.todo = this.ToDo.todo;
        this.username = this.ToDo.username;
      },
      error => {
        console.log(error);
      }
      );
  }


  updateToDo() {
    // this.router.navigate(['updateTodo']);
    this.dataService.createOrEditTodo(this._id, this.todo, this.isDone, this.hasAttachment)
      .subscribe(
      (status: any) => {
        console.log(status);
      },
      error => {
        console.log(error);
      }
      );
  }
}
