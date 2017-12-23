import { Component, OnInit } from '@angular/core';
import { Todo } from '../datagrid/todo';
import { DataService } from '../data.service';
import { MenuItem, Message } from 'primeng/components/common/api';
import { GrowlModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { ViewEncapsulation } from '@angular/core';

// impffort { filter } from 'rxjs/operators';




@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class DatagridComponent implements OnInit {
  msgs: Message[];
  items: MenuItem[];
  todos: Todo[];

  selectedTodo: Todo;

  displayDialog: boolean;

  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.dataService.getUserTodo()
      .subscribe((users: any[]) => {
        this.todos = users;
      },
      error => {
        console.log(error);
      }
      );
  }

  // selectCar(car: Car) {
  //   this.selectedCar = car;
  //   this.displayDialog = true;
  // }

  // onDialogHide() {
  //   this.selectedCar = null;
  // }

}
