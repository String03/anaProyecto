import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent{
    product: Product = {
        id: '1',
        image: 'assets/images/muffin_de_vainilla.png',
        title: 'muffin de vainilla',
        price: 100,
        description: 'dulce'
    };

// tslint:disable-next-line: eofline
}