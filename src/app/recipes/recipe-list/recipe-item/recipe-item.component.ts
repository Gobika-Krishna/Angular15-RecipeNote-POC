import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipeitem : Recipe;

  @Output() selectedRecipeItem = new EventEmitter<void>();

  onSelectRecipeItem( ) {
    this.selectedRecipeItem.emit();
  }

}
