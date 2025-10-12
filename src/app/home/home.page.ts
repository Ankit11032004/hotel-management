import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicModule, PopoverController, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CartPopoverComponent } from '../cart-popover/cart-popover.component';
import { BackgroundBubblesComponent } from '../background-bubbles/background-bubbles.component';
import { BookingService } from '../services/booking.service';

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
  selectedCategory: string = 'all';
  showOverlay: boolean = true;
  heroVideoSrc: string = 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4';
  heroBorderStyle: string = 'none';

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  categories = [
    { id: 'couple', label: '💑 Couple Hotels', emoji: '💑' },
    { id: 'single', label: '🧑 Single Stay', emoji: '🧑' },
    { id: 'professional', label: '👔 Professional', emoji: '👔' },
    { id: 'family', label: '👨‍👩‍👧 Family & Group', emoji: '👨‍👩‍👧' }
  ];

  hotels = [
    {
      name: 'Taj',
      place: 'Mumbai',
      price: 4500,
      rating: 5,
      category: 'couple',
      img: 'https://images.jdmagicbox.com/v2/comp/mumbai/23/022p2000023/catalogue/taj-mahal-hotel-apollo-bunder-mumbai-5-star-hotels-0fouvgunb9.jpg',
      description: 'A luxurious 5-star hotel in the heart of Mumbai, offering world-class amenities, fine dining, and stunning views of the Arabian Sea.',
      freeWifi: true,
      roomCapacity: 200
    },
    {
      name: 'Oberoi',
      place: 'New Delhi',
      price: 13000,
      rating: 4,
      category: 'family',
      img: 'https://api.blessingsonthenet.com/uploads/hotels/3af9e841613bcabff7d605bc8aac566e-1688986894063-The%20Oberoi%20Hotel%20Mumbai_1.webp',
      description: 'Experience elegance and sophistication at The Oberoi in New Delhi, with spacious rooms, award-winning restaurants, and impeccable service.',
      freeWifi: true,
      roomCapacity: 150
    },
    {
      name: 'Marriott',
      place: 'Bangalore',
      price: 11000,
      rating: 4,
      category: 'professional',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ee/2d/9d/jw-marriott-hotel-mumbai.jpg?w=900&h=500&s=1',
      description: 'JW Marriott Bangalore offers modern luxury in the IT capital, featuring state-of-the-art facilities, fitness centers, and business services.',
      freeWifi: true,
      roomCapacity: 300
    },
    {
      name: 'ITC',
      place: 'Chennai',
      price: 10000,
      rating: 4,
      category: 'family',
      img: 'https://hospitalitybizindia.com/wp-content/uploads/2023/09/ITC-hotels.jpg',
      description: 'ITC Grand Chola in Chennai combines heritage with luxury, offering traditional South Indian hospitality in a contemporary setting.',
      freeWifi: true,
      roomCapacity: 250
    },
    {
      name: 'Hyatt',
      place: 'Pune',
      price: 12000,
      rating: 4,
      category: 'professional',
      img: 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/03/07/1426/PTYRP-P0085-Hotel-Sign.jpg/PTYRP-P0085-Hotel-Sign.4x3.jpg?imwidth=1920',
      description: 'Hyatt Regency Pune provides comfortable accommodations, excellent dining options, and proximity to business districts.',
      freeWifi: true,
      roomCapacity: 180
    },
    {
      name: 'Taj Palace',
      place: 'Mumbai',
      price: 12000,
      rating: 5,
      category: 'couple',
      img: 'https://ionicframework.com/docs/demos/api/card/madison.jpg',
      description: 'Taj Mahal Palace in Mumbai is an iconic landmark offering opulent rooms, historic charm, and unparalleled luxury services.',
      freeWifi: true,
      roomCapacity: 220
    },
    {
      name: 'The Oberoi',
      place: 'New Delhi',
      price: 10000,
      rating: 4,
      category: 'family',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/26/65/7d/the-oberoi-new-delhi.jpg?w=900&h=500&s=1',
      description: 'The Oberoi New Delhi delivers exceptional hospitality with lush gardens, fine cuisine, and personalized concierge services.',
      freeWifi: true,
      roomCapacity: 160
    },
    {
      name: 'Leela Palace',
      place: 'jaipur',
      price: 9500,
      rating: 4,
      category: 'single',
      img: 'https://www.theleela.com/prod/content/assets/2025-05/Intro_1035x600.webp?VersionId=.sJr31TjJ2boA1lQIsiSJL4Y5qo1jQtM',
      description: 'The Leela Palace Bangalore offers palatial luxury with world-class spas, gourmet restaurants, and scenic lake views.',
      freeWifi: true,
      roomCapacity: 190
    },
    {
      name: 'Radisson Blu',
      place: 'Hyderabad',
      price: 9000,
      rating: 4,
      category: 'professional',
      img: 'https://gos3.ibcdn.com/d076a970c29e11ebbbed0242ac110005.jpg',
      description: 'Radisson Blu Hyderabad offers modern amenities, excellent dining, and convenient access to business hubs.',
      freeWifi: true,
      roomCapacity: 140
    },
    {
      name: 'The Westin',
      place: 'Kolkata',
      price: 8500,
      rating: 4,
      category: 'single',
      img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/560379084.jpg?k=4fc6f70d66d1b24c26f077b1fbb957a775a221c6217617d9262b0166ae7a2c8e&o=&hp=1',
      description: 'The Westin Kolkata provides luxurious rooms, spa services, and beautiful views of the city skyline.',
      freeWifi: false,
      roomCapacity: 120
    },
    {
      name: 'Sheraton',
      place: 'Goa',
      price: 9500,
      rating: 4,
      category: 'family',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/2c/db/caption.jpg?w=900&h=500&s=1',
      description: 'Sheraton Goa Resort offers beachfront access, pools, and vibrant nightlife nearby.',
      freeWifi: true,
      roomCapacity: 170
    },
  ];

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

  constructor(private popoverController: PopoverController, private router: Router, private bookingService: BookingService, private alertController: AlertController) {
    this.filteredHotels = this.hotels;
  }

  get bookedHotels(): any[] {
    return this.bookingService.getBookedHotels();
  }

  get cart(): any[] {
    return this.bookingService.getCart();
  }

  filterByCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    if (this.selectedCategory === 'all') {
      this.filteredHotels = this.hotels;
      this.heroVideoSrc = 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4';
      this.showOverlay = true;
    } else {
      this.filteredHotels = this.hotels.filter(hotel => hotel.category === this.selectedCategory);
      // Update hero video based on category
      switch (categoryId) {
        case 'couple':
          this.heroVideoSrc = 'assets/video/Wedding_App_Illustration_Request.mp4';
          this.showOverlay = false;
          break;
        case 'single':
          this.heroVideoSrc = 'assets/video/Digital_Illustration_Request_and_Generation.mp4';
          this.showOverlay = false;
          break;
        case 'professional':
          this.heroVideoSrc = 'assets/video/Business_Illustration_for_App.mp4';
          this.showOverlay = false;
          break;
        case 'family':
          this.heroVideoSrc = 'assets/video/Family_Illustration_Generation.mp4';
          this.showOverlay = false;
          break;
        default:
          this.heroVideoSrc = 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4';
          this.showOverlay = true;
      }
      if (this.videoPlayer) {
        this.videoPlayer.nativeElement.load();
      }
    }
  }

  async bookHotel(hotel: any) {
    const alert = await this.alertController.create({
      header: 'Select Booking Date and Duration',
      inputs: [
        {
          name: 'date',
          type: 'date',
          placeholder: 'Choose a date'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Book 12 hours',
          handler: async (data) => {
            if (data.date) {
              this.bookingService.bookHotel(hotel, data.date, 12);
              const successAlert = await this.alertController.create({
                header: 'Booking Successful',
                message: `You have successfully booked ${hotel.name} for ${data.date} with 12 hours.`,
                buttons: ['OK']
              });
              await successAlert.present();
            }
          }
        },
        {
          text: 'Book 24 hours',
          handler: async (data) => {
            if (data.date) {
              this.bookingService.bookHotel(hotel, data.date, 24);
              const successAlert = await this.alertController.create({
                header: 'Booking Successful',
                message: `You have successfully booked ${hotel.name} for ${data.date} with 24 hours.`,
                buttons: ['OK']
              });
              await successAlert.present();
            }
          }
        },
        {
          text: 'Book 36 hours',
          handler: async (data) => {
            if (data.date) {
              this.bookingService.bookHotel(hotel, data.date, 36);
              const successAlert = await this.alertController.create({
                header: 'Booking Successful',
                message: `You have successfully booked ${hotel.name} for ${data.date} with 36 hours.`,
                buttons: ['OK']
              });
              await successAlert.present();
            }
          }
        },
        {
          text: 'Book 48 hours',
          handler: async (data) => {
            if (data.date) {
              this.bookingService.bookHotel(hotel, data.date, 48);
              const successAlert = await this.alertController.create({
                header: 'Booking Successful',
                message: `You have successfully booked ${hotel.name} for ${data.date} with 48 hours.`,
                buttons: ['OK']
              });
              await successAlert.present();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async addToCart(hotel: any) {
    this.bookingService.addToCart(hotel);
    const alert = await this.alertController.create({
      header: 'Added to Cart',
      message: `${hotel.name} has been added to your cart.`,
      buttons: ['OK']
    });
    await alert.present();
  }

  goToDetail(hotel: any) {
    this.router.navigate(['/hotel-detail'], { queryParams: { hotel: JSON.stringify(hotel) } });
  }

  onSearchChange(event: any) {
    const val = event.detail.value.toLowerCase();
    this.filteredHotels = this.hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(val) || hotel.place.toLowerCase().includes(val)
    );
  }

  getTotal(): number {
    return this.bookingService.getBookedHotels().reduce((sum: number, booking: any) => sum + booking.hotel.price, 0);
  }

  async openCartPopover(event: any) {
    const popover = await this.popoverController.create({
      component: CartPopoverComponent,
      componentProps: {
        cart: this.cart
      },
      event: event,
      translucent: true
    });
    await popover.present();
  }

  changeHeroBorder() {
    this.heroBorderStyle = '2px solid red';
  }
  changeSecondaryColor() {
    this.heroBorderStyle = '2px solid blue';
  }
}
