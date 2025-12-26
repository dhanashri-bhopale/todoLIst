import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from './module/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('todoItem') todoItem! : ElementRef

  todoArr: Array<Itodo> = [
    {
      todoItem: 'HTML',
      todoId: '123'
    },
    {
      todoItem: 'CSS',
      todoId: '124'
    },
    {
      todoItem: 'Javascript',
      todoId: '125'
    }
  ]

  isInUpdateMode: boolean = false

  onTodoAdd(){

    if(this.todoItem.nativeElement.value.length > 0){
      //get TODO obj
    let todoObj: Itodo ={
      todoItem: this.todoItem.nativeElement.value,
      todoId: Date.now().toString()
    }
    this.todoItem.nativeElement.value = ''
    console.log(todoObj);

    //push Array
    this.todoArr.push(todoObj)
    //create a new li
    
    }

  }
  
  trackById(index: number, todo: Itodo){
    return todo.todoItem
  }
  
  onRemove(id: string){
    console.log(id)

    let getIndex = this.todoArr.findIndex(t => t.todoId === id)
    this.todoArr.splice(getIndex, 1)
  }

  editId!: string

  onEdit(todo: Itodo){
    console.log(todo);

    this.editId = todo.todoId
    this.todoItem.nativeElement.value = todo.todoItem
    this.isInUpdateMode = true
      
    }

    onUpdate(){
      let UPDATED_TODO :Itodo ={
        todoItem: this.todoItem.nativeElement.value,
        todoId: this.editId
      }
      console.log(UPDATED_TODO);
      this.todoItem.nativeElement.value = ''

      let getIndex = this.todoArr.findIndex(t => t.todoId === UPDATED_TODO.todoId)

      this.todoArr[getIndex] = UPDATED_TODO
    }


    cartCount: number = 0
  onCAdd(){
    if(this.cartCount <= 10){
      this.cartCount++
    }
  }

  onCDelete(){
    if(this.cartCount > 0){
      this.cartCount--
    }
  }

  }



  

  



