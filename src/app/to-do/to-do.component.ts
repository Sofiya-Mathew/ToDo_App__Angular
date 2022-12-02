import { Component, OnInit } from '@angular/core';
import { Todo } from '../Models/Todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
todos:Todo[] | undefined
input:string=''
  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        content:'first todo',
        completed:true,
      },
      {
        content:'second todo',
        completed:false,
      }
    ]
  }
toggleDone(id: number){
 this.todos?.map((value,index)=>{
  if(id==index) value.completed=!value.completed
  return value
 })
}

deleteTodo(id:number){
  this.todos=this.todos?.filter((value,index)=>index!==id)
}

addTodo(){
  this.todos?.push({
    content:this.input,
    completed:false
  })
  this.input=""
}
}
