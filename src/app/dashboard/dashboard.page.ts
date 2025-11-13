import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonProgressBar, IonList, IonItem, IonLabel, IonNote, IonIcon } from '@ionic/angular/standalone';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { Chart as ChartJS, registerables } from 'chart.js';

// Register Chart.js components
ChartJS.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonGrid, IonProgressBar, IonList, IonItem, IonLabel, IonNote, IonIcon, CommonModule, FormsModule, BaseChartDirective]
})
export class DashboardPage implements OnInit {

  totalBookings: number = 150;
  totalRevenue: number = 250000;
  availableRooms: number = 45;
  bookedRooms: number = 25;
  newBookingsToday: number = 8;
  averageRating: number = 4.5;
  totalReviews: number = 320;
  totalStaff: number = 50;
  staffPresent: number = 48;

  recentActivities: any[] = [
    { description: 'New booking received for Deluxe Room', time: '10:30 AM' },
    { description: 'Check-out completed for Room 201', time: '9:15 AM' },
    { description: 'Maintenance request for Room 105', time: '8:45 AM' },
    { description: 'Payment received for booking #1234', time: '8:30 AM' }
  ];

  // Chart data
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '₹' + value.toLocaleString();
          }
        }
      }
    }
  };
  public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [120000, 150000, 180000, 200000, 220000, 250000],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  public lineChartLabels: string[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.lineChartLabels,
    datasets: [
      {
        data: [120, 135, 148, 150],
        fill: true,
        tension: 0.4,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2
      }
    ]
  };

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    }
  };
  public pieChartLabels: string[] = ['Available', 'Booked'];
  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: this.pieChartLabels,
    datasets: [
      {
        data: [this.availableRooms, this.bookedRooms],
        backgroundColor: ['rgba(255, 206, 86, 0.8)', 'rgba(255, 99, 132, 0.8)'],
        borderColor: ['rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
