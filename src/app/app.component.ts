import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-template-outlet-in-angular';


  employees = [
    { firstName: 'Sanjay', lastName: 'Garg' },
    { firstName: 'Varun', lastName: 'Goel' },
    { firstName: 'Prim', lastName: 'Garg' },
    { firstName: 'Nitish', lastName: 'Bansal' },
    { firstName: 'Mayank', lastName: 'Duggal' },
    ];

    inventory = [
      {
        plu: 110,
        supplier: 'X Corp',
        name: 'Table extender',
        inStock: 500,
        price: 50,
        currency: 'GBP',
      },
      {
        plu: 120,
        supplier: 'X Corp',
        name: 'Heated toilet seat',
        inStock: 0,
        price: 80,
        currency: 'GBP',
      },
      {
        plu: 155,
        supplier: 'Y Corp',
        name: 'Really good pencil',
        inStock: 1,
        price: 8000,
        currency: 'AUD',
      },
    ];

    purchaseItem(plu: number) {
      console.log('handle purchase for', plu);
    }
  

}
