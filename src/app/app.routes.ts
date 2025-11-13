import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'rooms',
    loadComponent: () =>
      import('./pages/rooms/rooms.page').then((m) => m.RoomsPage),
  },
  {
    path: 'bookings',
    loadComponent: () =>
      import('./pages/bookings/bookings.page').then((m) => m.BookingsPage),
  },
  {
    path: 'hotel-detail',
    loadComponent: () =>
      import('./pages/hotel-detail/hotel-detail.page').then((m) => m.HotelDetailPage),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
];
