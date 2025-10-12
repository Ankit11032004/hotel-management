import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FullCalendarModule]
})
export class BookingsPage implements OnInit {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: []
  };

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    const bookings = this.bookingService.getBookedHotels();
    this.calendarOptions.events = bookings.map(booking => ({
      title: `${booking.hotel.name} (${booking.duration}h)`,
      date: booking.date
    }));
  }

}
