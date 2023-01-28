import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe 1', 'Test desc',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2017%2F05%2Fmain%2Fgrilled-chicken-drumsticks-bourbon-cherry-bbq-sauce-1707p126.jpg%3Fitok%3Dus5SCOVu&w=450&h=223&c=sc&poi=face&q=60'),
    new Recipe('A test Recipe 2', 'Test desc',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2017%2F05%2Fmain%2Fgrilled-chicken-drumsticks-bourbon-cherry-bbq-sauce-1707p126.jpg%3Fitok%3Dus5SCOVu&w=450&h=223&c=sc&poi=face&q=60')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }
  ngOnInit() { }
  onSelectItem(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
