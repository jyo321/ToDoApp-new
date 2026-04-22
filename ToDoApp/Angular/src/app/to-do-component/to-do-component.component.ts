import { Component, OnInit } from '@angular/core';
import { ToDOModel } from '../core/Model/todoModel';
import { ToDOServiceService } from '../core/Service/todoService/to-doservice.service';

@Component({
  selector: 'app-to-do-component',
  templateUrl: './to-do-component.component.html',
  styleUrls: ['./to-do-component.component.css']
})
export class ToDoComponentComponent implements OnInit {

  todoList: ToDOModel[] = [];

  constructor(private todoService : ToDOServiceService) { }
  ngOnInit(): void {
    this.getDoToItems();
  }
  getDoToItems() {
    this.todoService.getToDOItems().subscribe((result)=>{
      if(result && result.length > 0) {
        this.todoList = result;
      }
    },
     (err)=>{
      console.log("Error occured", err)
     }

    );
  }

}
