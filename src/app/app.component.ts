import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
// @ts-ignore
import { logoFacebook, logoInstagram, businessOutline, bedOutline, logOutOutline, wifiOutline, peopleOutline, star, starOutline, restaurantOutline, fitnessOutline, mailOutline, lockClosedOutline, eyeOffOutline, eyeOutline, cartOutline, homeOutline, home } from 'ionicons/icons';

// ✅ Register all icons here — only once
addIcons({
  logoFacebook,
  logoInstagram,
  'business-outline': businessOutline,
  'bed-outline': bedOutline,
  'log-out-outline': logOutOutline,
  'wifi-outline': wifiOutline,
  'people-outline': peopleOutline,
  'star': star,
  'star-outline': starOutline,
  'restaurant-outline': restaurantOutline,
  'fitness-outline': fitnessOutline,
  'mail-outline': mailOutline,
  'lock-closed-outline': lockClosedOutline,
  'eye-off-outline': eyeOffOutline,
  'eye-outline': eyeOutline,
  'cart-outline': cartOutline,
  'home-outline': homeOutline,
  'home': home
});

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet] // ✅ only components/modules go here
})
export class AppComponent {
  constructor() {}
}
