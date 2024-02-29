import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  productsList: IProduct[] = [];

  getProducts(products: IProduct[]) {
    this.productsList = products;
  }
}
