import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule, FormsModule, FullCalendarModule
  ]
})
export class RoomsPage implements OnInit {

  currentDateTime: string = '';

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: []
  };

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000); // Update every second
    this.loadCalendarEvents();
    this.bookingService.bookedHotels$.subscribe(() => {
      this.loadCalendarEvents();
    });
  }

  loadCalendarEvents() {
    const bookings = this.bookingService.getBookedHotels();
    this.calendarOptions.events = bookings.map(booking => ({
      title: `${booking.hotel.name} (${booking.duration}h)`,
      date: booking.date
    }));
  }

  get bookedHotels(): any[] {
    return this.bookingService.getBookedHotels();
  }

  updateDateTime() {
    this.currentDateTime = new Date().toLocaleString();
  }

  removeBooking(hotelName: string) {
    this.bookingService.removeBooking(hotelName);
  }

}
