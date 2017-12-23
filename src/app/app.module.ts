import { PanelModule, DialogModule, TabViewModule, CodeHighlighterModule, ContextMenuModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TodoOptionComponent } from './todo-option/todo-option.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { GrowlModule } from 'primeng/primeng';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'toDoOption', component: TodoOptionComponent },
  { path: 'veiwToDos', component: ViewTodoComponent },
  { path: 'editToDo/:id', component: EditTodoComponent },
  { path: 'updateTodo', component: UpdateTodoComponent }
  // { path: 'something', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '/something' }


];


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    EditTodoComponent,
    TodoOptionComponent,
    ViewTodoComponent,
    UpdateTodoComponent,
    LoginComponent,
    SignUpComponent,
    DatagridComponent
  ],
  imports: [
    GrowlModule,
    ContextMenuModule,
    DataTableModule,
    SharedModule,
    CommonModule,
    PanelModule,
    DialogModule,
    TabViewModule,
    CodeHighlighterModule,
    BrowserModule,
    HttpModule,
    FormsModule, RouterModule.forRoot(appRoutes)


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
