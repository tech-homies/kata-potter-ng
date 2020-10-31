import { Component } from '@angular/core';
import {PriceService} from './price.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    price: number;

    constructor(private readonly priceService: PriceService) {
    }

    submitForm(input: string): void {
        const books = input.split(',').map(v => Number(v));
        this.price = this.priceService.computePrice(books);
    }

}
