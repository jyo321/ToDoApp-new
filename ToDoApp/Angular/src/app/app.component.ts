import { Component } from '@angular/core';
import { ToDOServiceService } from './core/Service/todoService/to-doservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ToDOServiceService]
})
export class AppComponent {
  title = 'ToDoApp';

  constructor(private todoservice: ToDOServiceService){

  }
}
