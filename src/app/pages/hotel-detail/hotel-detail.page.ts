import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.page.html',
  styleUrls: ['./hotel-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class HotelDetailPage implements OnInit {
  hotel: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['hotel']) {
        this.hotel = JSON.parse(params['hotel']);
      } else {
        // If no hotel data, navigate back to home
        this.router.navigate(['/home']);
      }
    });
  }
}
