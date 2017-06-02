import { Component  } from '@angular/core';
import { meal } from './meal.model';

@Component({
  selector: 'edit-task',
  template:`
  <div *ngIf="childSelectedTask">
    <h2>Edit Task</h2>
    <label>Enter Task Description:</label>
    <input [(ngModel)]="childSelectedTask.description">
    <label>Enter Task ID:</label>
    <input [(ngModel)]="childSelectedTask.id">
    <button (click)="doneClicked()">Done Editing</button>
  </div>
  `
})

export class EditTaskComponent{

  doneClicked(){
    this.doneClickedSender.emit();
  }
}
