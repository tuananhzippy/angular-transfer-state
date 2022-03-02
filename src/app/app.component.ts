import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'test-transfer-state';
  doing: Array<any> = [];

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todoService.getDoing().subscribe(response => {
      this.doing = response;
    })
  }
}
