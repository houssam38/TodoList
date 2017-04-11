import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
@Component({
  selector: 'page-addtodo',
  templateUrl: 'addtodo.html'
})

export class AddTodos { 
    public todoList: Array<string>;
    public todoItem: string;
 
    constructor(private nav: NavController) {
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if(!this.todoList) {
            this.todoList = [];
        }
        this.todoItem = "";
    }
 
    save() {
        if(this.todoItem != "") {
            console.log("Test");
            this.todoList.push(this.todoItem);
            localStorage.setItem("todos", JSON.stringify(this.todoList));
            this.nav.pop();
        }
    }
 
}