import { Component, ViewChild } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CartPopoverComponent } from '../cart-popover/cart-popover.component';
import { BackgroundBubblesComponent } from '../background-bubbles/background-bubbles.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FooterComponent, BackgroundBubblesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  searchTerm: string = '';
  filteredHotels: any[] = [];

  hotels = [
    {
      name: 'Taj',
      place: 'Mumbai',
      price: 4500,
      rating: 5,
      img: 'https://images.jdmagicbox.com/v2/comp/mumbai/23/022p2000023/catalogue/taj-mahal-hotel-apollo-bunder-mumbai-5-star-hotels-0fouvgunb9.jpg',
      description: 'A luxurious 5-star hotel in the heart of Mumbai, offering world-class amenities, fine dining, and stunning views of the Arabian Sea.'
    },
    {
      name: 'Oberoi',
      place: 'New Delhi',
      price: 13000,
      rating: 4,
      img: 'https://api.blessingsonthenet.com/uploads/hotels/3af9e841613bcabff7d605bc8aac566e-1688986894063-The%20Oberoi%20Hotel%20Mumbai_1.webp',
      description: 'Experience elegance and sophistication at The Oberoi in New Delhi, with spacious rooms, award-winning restaurants, and impeccable service.'
    },
    {
      name: 'Marriott',
      place: 'Bangalore',
      price: 11000,
      rating: 4,
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ee/2d/9d/jw-marriott-hotel-mumbai.jpg?w=900&h=500&s=1',
      description: 'JW Marriott Bangalore offers modern luxury in the IT capital, featuring state-of-the-art facilities, fitness centers, and business services.'
    },
    {
      name: 'ITC',
      place: 'Chennai',
      price: 10000,
      rating: 4,
      img: 'https://hospitalitybizindia.com/wp-content/uploads/2023/09/ITC-hotels.jpg',
      description: 'ITC Grand Chola in Chennai combines heritage with luxury, offering traditional South Indian hospitality in a contemporary setting.'
    },
    {
      name: 'Hyatt',
      place: 'Pune',
      price: 12000,
      rating: 4,
      img: 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/03/07/1426/PTYRP-P0085-Hotel-Sign.jpg/PTYRP-P0085-Hotel-Sign.4x3.jpg?imwidth=1920',
      description: 'Hyatt Regency Pune provides comfortable accommodations, excellent dining options, and proximity to business districts.'
    },
    {
      name: 'Taj Palace',
      place: 'Mumbai',
      price: 12000,
      rating: 5,
      img: 'https://ionicframework.com/docs/demos/api/card/madison.jpg',
      description: 'Taj Mahal Palace in Mumbai is an iconic landmark offering opulent rooms, historic charm, and unparalleled luxury services.'
    },
    {
      name: 'The Oberoi',
      place: 'New Delhi',
      price: 10000,
      rating: 4,
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/26/65/7d/the-oberoi-new-delhi.jpg?w=900&h=500&s=1',
      description: 'The Oberoi New Delhi delivers exceptional hospitality with lush gardens, fine cuisine, and personalized concierge services.'
    },
    {
      name: 'Leela Palace',
      place: 'jaipur',
      price: 9500,
      rating: 4,
      img: 'https://www.theleela.com/prod/content/assets/2025-05/Intro_1035x600.webp?VersionId=.sJr31TjJ2boA1lQIsiSJL4Y5qo1jQtM',
      description: 'The Leela Palace Bangalore offers palatial luxury with world-class spas, gourmet restaurants, and scenic lake views.'
    },
    {
      name: 'Radisson Blu',
      place: 'Hyderabad',
      price: 9000,
      rating: 4,
      img: 'https://gos3.ibcdn.com/d076a970c29e11ebbbed0242ac110005.jpg',
      description: 'Radisson Blu Hyderabad offers modern amenities, excellent dining, and convenient access to business hubs.'
    },
    {
      name: 'The Westin',
      place: 'Kolkata',
      price: 8500,
      rating: 4,
      img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/560379084.jpg?k=4fc6f70d66d1b24c26f077b1fbb957a775a221c6217617d9262b0166ae7a2c8e&o=&hp=1',
      description: 'The Westin Kolkata provides luxurious rooms, spa services, and beautiful views of the city skyline.'
    },
    {
      name: 'Sheraton',
      place: 'Goa',
      price: 9500,
      rating: 4,
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/2c/db/caption.jpg?w=900&h=500&s=1',
      description: 'Sheraton Goa Resort offers beachfront access, pools, and vibrant nightlife nearby.'
    },
  ];

  bookedHotels: any[] = [];
  showBooked: boolean = false;

  slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  loop: true,
  direction: 'horizontal'   // 👈 force horizontal layout
};

  constructor(private popoverController: PopoverController) {
    this.filteredHotels = this.hotels;
  }

  bookHotel(hotel: any) {
    if (!this.bookedHotels.find(h => h.name === hotel.name)) {
      this.bookedHotels.push(hotel);
    }
  }

  onSearchChange(event: any) {
    const val = event.detail.value.toLowerCase();
    this.filteredHotels = this.hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(val) || hotel.place.toLowerCase().includes(val)
    );
  }

  getTotal(): number {
    return this.bookedHotels.reduce((sum, hotel) => sum + hotel.price, 0);
  }

  async openCartPopover(event: any) {
    const popover = await this.popoverController.create({
      component: CartPopoverComponent,
      componentProps: {
        bookedHotels: this.bookedHotels
      },
      event: event,
      translucent: true
    });
    await popover.present();
  }
}
