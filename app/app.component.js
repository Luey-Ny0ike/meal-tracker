"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var meal_model_1 = require('./meal.model');
var AppComponent = (function () {
    function AppComponent() {
        this.masterMealList = [
            new meal_model_1.meal('chapo', 'Really tasty I loved', 700),
            new meal_model_1.meal('cheeseBurger', 'The cheese was terrible', 1200),
            new meal_model_1.meal('Cola', 'Made me more thirsty', 400),
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'heading',
            template: "<h1>Meal tracker</h1>\n  <h3>Keep track of all the calories you consume for better health</h3>\n  <div class=\"table-responsive\">\n <table class=\"table\">\n   <thead>\n     <tr>\n       <th>Meal name</th>\n       <th>Description</th>\n       <th>calories</th>\n       <th>Edit</th>\n     </tr>\n   </thead>\n   <tbody>\n     <tr *ngFor=\"let currentMeal of masterMealList\">\n       <td>{{currentMeal.mealName}}</td>\n       <td>{{currentMeal.description}}</td>\n       <td>{{currentMeal.calories}}</td>\n       <td><button>Edit</button></td>\n     </tr>\n   </tbody>\n </table>\n </div>\n\n  <meals></meals>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map