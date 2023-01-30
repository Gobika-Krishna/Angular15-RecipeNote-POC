import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    @Output() selectedRecipeItem = new EventEmitter<Recipe>();
    constructor(private shoppinglistService: ShoppingListService) { }
    recipes: Recipe[] = [
        new Recipe('Chicken', 'Chicken leg piece',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2017%2F05%2Fmain%2Fgrilled-chicken-drumsticks-bourbon-cherry-bbq-sauce-1707p126.jpg%3Fitok%3Dus5SCOVu&w=450&h=223&c=sc&poi=face&q=60',
            [
                new Ingredient('chicken', 1),
                new Ingredient('spices', 50)
            ]),
        new Recipe('A test Recipe 2', 'Test desc',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2017%2F05%2Fmain%2Fgrilled-chicken-drumsticks-bourbon-cherry-bbq-sauce-1707p126.jpg%3Fitok%3Dus5SCOVu&w=450&h=223&c=sc&poi=face&q=60',
            [
                new Ingredient('meat', 5),
                new Ingredient('oil', 1)
            ])
    ];


    getRecipe() {
        //slice returns exact copy of original array
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppinglistService.addIngredients(ingredients);
    }

}