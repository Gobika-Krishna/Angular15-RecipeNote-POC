import { Injectable } from '@angular/core';
import { Subject } from 'rxjs-compat';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  constructor(private shoppinglistService: ShoppingListService) {}
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'Blueberry Loaf',
  //     'This blueberry bread recipe is easy to make and bakes up beautifully moist',
  //     'https://www.allrecipes.com/thmb/vf9E9MMkUJgpg2lCLb99i2fHBx0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/229694-blueberry-loaf-ddmfs-3x2-149-3102f88d13f34f7b958dca7f6b065e31.jpg',
  //     [
  //       new Ingredient('all-purpose flour', '1 ½ cups'),
  //       new Ingredient('white sugar', '¾ cup'),
  //       new Ingredient('baking powder', '2 teaspoons'),
  //       new Ingredient('teaspoon salt', '1 teaspoon'),
  //       new Ingredient('milk', '½ cup'),
  //       new Ingredient('vegetable oil', '¼ cup'),
  //       new Ingredient('egg', '1'),
  //       new Ingredient('vanilla extract', '½ teaspoons'),
  //       new Ingredient('blueberries', '1 ½ cup'),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  // to set the fetched recipes from DB on the template
  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    //slice returns exact copy of original array
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newrecipe: Recipe) {
    this.recipes[index] = newrecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  recipeDelete(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
