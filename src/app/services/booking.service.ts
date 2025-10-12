import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookedHotelsSubject = new BehaviorSubject<any[]>([]);
  bookedHotels$ = this.bookedHotelsSubject.asObservable();
  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {
    // Load bookedHotels from localStorage
    const storedBookings = localStorage.getItem('bookedHotels');
    if (storedBookings) {
      const parsed = JSON.parse(storedBookings);
      if (Array.isArray(parsed) && parsed.length > 0) {
        if ('hotel' in parsed[0]) {
          // new format
          this.bookedHotelsSubject.next(parsed);
        } else {
          // old format, migrate
          const migrated = parsed.map((hotel: any) => ({ hotel, date: new Date().toISOString().split('T')[0], duration: 24 }));
          this.bookedHotelsSubject.next(migrated);
          localStorage.setItem('bookedHotels', JSON.stringify(migrated));
        }
      }
    }

    // Load cart from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      if (Array.isArray(parsedCart)) {
        this.cartSubject.next(parsedCart);
      }
    }
  }

  getBookedHotels(): any[] {
    return this.bookedHotelsSubject.value;
  }

  getCart(): any[] {
    return this.cartSubject.value;
  }

  bookHotel(hotel: any, date: string, duration: number) {
    const current = this.bookedHotelsSubject.value;
    if (!current.find(b => b.hotel.name === hotel.name)) {
      const booking = { hotel, date, duration };
      const updated = [...current, booking];
      this.bookedHotelsSubject.next(updated);
      localStorage.setItem('bookedHotels', JSON.stringify(updated));
    }
  }

  addToCart(hotel: any) {
    const current = this.cartSubject.value;
    if (!current.find(c => c.name === hotel.name)) {
      const updated = [...current, hotel];
      this.cartSubject.next(updated);
      localStorage.setItem('cart', JSON.stringify(updated));
    }
  }

  removeFromCart(hotelName: string) {
    const updated = this.cartSubject.value.filter(c => c.name !== hotelName);
    this.cartSubject.next(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  }

  removeBooking(hotelName: string) {
    const updated = this.bookedHotelsSubject.value.filter(b => b.hotel.name !== hotelName);
    this.bookedHotelsSubject.next(updated);
    localStorage.setItem('bookedHotels', JSON.stringify(updated));
  }
}
