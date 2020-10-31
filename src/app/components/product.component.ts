import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit, DoCheck{
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();


    constructor()
    {
        console.log('constructor');
    }



    // ngOnChanges(changes: SimpleChanges)
    // {
    //     console.log('ngOnChanges');
    //     console.log(changes);
    // }


    // tslint:disable-next-line: typedef
    ngOnInit()
    {
        console.log('3. ngOnInit');
    }


    // tslint:disable-next-line: typedef
    ngDoCheck()
    {
        console.log('4. ngOnInit');
    }


    // tslint:disable-next-line: typedef
    addCart()
    {
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }


// tslint:disable-next-line: eofline
}