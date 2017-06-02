import { Component } from '@angular/core';
import {  meal  } from './meal.model';
@Component({
  selector:'heading',
  template:`<h1>Meal tracker</h1>
  <h3>Keep track of all the calories you consume for better health</h3>
  <div class="table-responsive">
 <table class="table">
   <thead>
     <tr>
       <th>Meal name</th>
       <th>Description</th>
       <th>calories</th>
       <th>Edit</th>
     </tr>
   </thead>
   <tbody>
     <tr *ngFor="let currentMeal of masterMealList">
       <td>{{currentMeal.mealName}}</td>
       <td>{{currentMeal.description}}</td>
       <td>{{currentMeal.calories}}</td>
       <td><button>Edit</button></td>
     </tr>
   </tbody>
 </table>
 </div>

  <meals></meals>
  `
})

export class AppComponent{
  public masterMealList: meal[] =
  [
    new meal('chapo', 'Really tasty I loved', 700),
      new meal('cheeseBurger', 'The cheese was terrible', 1200),
        new meal('Cola', 'Made me more thirsty', 400),
  ];
}
