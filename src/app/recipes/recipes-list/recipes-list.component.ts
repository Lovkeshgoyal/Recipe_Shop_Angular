import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes('A Test Reciepe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/01/14/09/47/food-1139580_960_720.jpg'),
    new Recipes('A Test Reciepe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/01/14/09/47/food-1139580_960_720.jpg')
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
