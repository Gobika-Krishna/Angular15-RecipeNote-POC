import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('tomato', 15),
    ];
    @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());

    }
    getIngredients() {
        return this.ingredients.slice();
    }

}