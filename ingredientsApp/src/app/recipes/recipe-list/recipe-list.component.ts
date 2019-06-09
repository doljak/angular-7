import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Teste Nome', 'Descrição Teste', 'https://www.seriouseats.com/2018/01/20171129-cannoli-vicky-wasik-11-1500x1125.jpg'),
    new Recipe('Teste Nome', 'Descrição Teste', 'https://www.seriouseats.com/2018/01/20171129-cannoli-vicky-wasik-11-1500x1125.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
