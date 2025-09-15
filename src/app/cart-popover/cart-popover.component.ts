import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-popover',
  templateUrl: './cart-popover.component.html',
  styleUrls: ['./cart-popover.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class CartPopoverComponent {
  @Input() bookedHotels: any[] = [];

  getTotal(): number {
    return this.bookedHotels.reduce((sum, hotel) => sum + hotel.price, 0);
  }
}
