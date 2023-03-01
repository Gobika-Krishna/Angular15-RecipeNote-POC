import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('tomato', 15),
    ];
     ingredientsChanged = new Subject<Ingredient[]>();
     editItemIndex = new Subject<number>();

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());

    }
    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index) {
        return this.ingredients[index];
    }


    updateIngredient(index:number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}