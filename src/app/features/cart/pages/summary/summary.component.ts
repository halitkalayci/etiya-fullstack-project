import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeItemFromCart } from 'src/app/shared/store/cart/cart.actions';
import { SharedState } from 'src/app/shared/store/shared.reducers';

@Component({
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  cart: any[] = [];
  constructor(private store: Store<SharedState>) {}
  ngOnInit(): void {
    this.store
      .select((s) => s.cart)
      .subscribe((cart) => {
        this.cart = cart;
      });
  }

  remove(item: any) {
    this.store.dispatch(removeItemFromCart({ id: item.id }));
  }
}
