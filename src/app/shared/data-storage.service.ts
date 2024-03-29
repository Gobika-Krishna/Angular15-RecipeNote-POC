import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}

  storeRecipes() {
    //store updated recipes to server
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://my-recipe-book-281fe-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });

    // store shoppinglist to server
    const shopping = this.shoppingListService.getIngredients();
    this.http
      .put(
        'https://my-recipe-book-281fe-default-rtdb.firebaseio.com/shopping.json',
        shopping
      )

      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://my-recipe-book-281fe-default-rtdb.firebaseio.com/recipes.json/'
      )
      .pipe(
        map((recipes: Recipe[]) => {
          return recipes.map((recipe: Recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes: Recipe[]) => {
          this.recipeService.setRecipe(recipes);
        })
      );
  }
}
