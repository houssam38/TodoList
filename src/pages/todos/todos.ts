import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddTodos } from "../addtodo/addtodo";

@Component({
  selector: 'page-todo',
  templateUrl: 'todos.html'
})
export class TodosPage {
 
    public todoList: Array<string>;
 
    constructor(private nav: NavController) { 
        //this.onPageDidEnter();
    }
 
    ionViewWillEnter() {
        console.log("ok");
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        console.log(this.todoList);
        if(!this.todoList) {
            this.todoList = [];
        }
    }
 
    delete(index: number) {
        this.todoList.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(this.todoList));
    }
 
    add() {
        this.nav.push(AddTodos);
    }
 
}