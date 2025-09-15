import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton,
    CommonModule, FormsModule
  ]
})
export class RoomsPage implements OnInit {

  rooms = [
    { id: 1, name: 'Deluxe Room', price: 2500, available: true },
    { id: 2, name: 'Suite Room', price: 4500, available: false },
    { id: 3, name: 'Standard Room', price: 1800, available: true }
  ];

  constructor() { }

  ngOnInit() {}

  bookRoom(roomId: number) {
    alert(`Booking started for Room ID: ${roomId}`);
    // later you can navigate to booking page or call an API
  }

}
