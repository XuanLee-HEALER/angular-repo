import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList('Bob', [
    new TodoItem('吃饭'),
    new TodoItem('睡觉'),
    new TodoItem('打豆豆'),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items
      .filter(item => !item.complete || this.showComplete)
      .length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items
      .filter(item => !item.complete || this.showComplete);
  }

  addItem(newItem: string) {
    if (newItem != '') {
      this.list.addItem(newItem);
    }
  }

  showComplete: boolean = false;
}
