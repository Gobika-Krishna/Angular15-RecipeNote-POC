import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css'],
})
export class OrderPlacementComponent implements OnInit {
  constructor(private shoppinglistService: ShoppingListService) {}
  quantity = 0;
  ngOnInit(): void {
    this.quantity = this.shoppinglistService.getIngredients().length;
    console.log(this.quantity);
  }

  orderForm: NgForm;
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
