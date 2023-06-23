import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app';
  list = Array();

  addItem(v: string): void {
    //Prevent adding duplicates
    if (this.list.includes(v)) 
      return;

    //Push the item to the array
    this.list.push(v);
  }

  removeItem(v: string): void {
    this.list.splice(this.list.indexOf(v), 1)
  }

  editItem(v: string): void {
    let e_input = document.getElementById(v);
    e_input?.removeAttribute('hidden');
  }

  saveItem(v: string, o: string): void {
    this.list[this.list.indexOf(o)] = v;
  }
}
