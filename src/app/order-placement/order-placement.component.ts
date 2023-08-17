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
  modalOpen = false;
  ngOnInit(): void {
    document.body.style.background = '#f6f6f6'; // display background color only to orders page
    this.quantity = this.shoppinglistService.getIngredients().length;
    console.log(this.quantity);
  }

  orderForm: NgForm;
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.modalOpen = true;
  }
}
