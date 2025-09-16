# Hotel Management System

A modern hotel management application built with Ionic Angular for the frontend and Node.js with Express and MongoDB for the backend. This app allows users to browse hotels, view rooms, make bookings, and manage their cart.

## Features

- **User Authentication**: Login functionality for users
- **Hotel Browsing**: View available hotels with ratings and descriptions
- **Room Management**: Browse and select rooms
- **Booking System**: Make and manage bookings
- **Cart Functionality**: Add items to cart for checkout
- **Responsive Design**: Built with Ionic for cross-platform compatibility

## Tech Stack

### Frontend
- **Ionic Framework**: v8.0.0
- **Angular**: v20.0.0
- **TypeScript**: v5.8.0
- **Capacitor**: For mobile deployment

### Backend
- **Node.js**
- **Express.js**: v5.1.0
- **MongoDB**: With Mongoose ODM v8.18.1
- **CORS**: For cross-origin requests

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local installation or cloud service like MongoDB Atlas)
- **Angular CLI** (optional, for development)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd hotel-management
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   cd ..
   ```

## Setup

1. **MongoDB Setup:**
   - Install MongoDB locally or use a cloud service
   - Create a database for the hotel management system

2. **Environment Variables:**
   - Create a `.env` file in the `backend` directory
   - Add your MongoDB connection string:
     ```
     MONGO_URI=mongodb://localhost:27017/hotel-management
     ```
     (Replace with your actual MongoDB URI if using a cloud service)

## Running the Application

1. **Start the Backend Server:**
   ```bash
   cd backend
   node server.js
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend (in a new terminal):**
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:4200`

## API Endpoints

The backend provides the following API endpoints:

- `GET /` - Health check
- `GET /hotels` - Retrieve all hotels
- `POST /hotels` - Add a new hotel

## Usage

1. Open your browser and navigate to `http://localhost:4200`
2. Register or login to your account
3. Browse available hotels and rooms
4. Add desired rooms to your cart
5. Proceed to checkout and make bookings
6. View your bookings in the bookings section

## Development

### Frontend Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run tests
- `npm run lint` - Run linting

### Backend Scripts
- `node server.js` - Start the server

## Project Structure

```
hotel-management/
├── src/                    # Frontend source code
│   ├── app/
│   │   ├── pages/          # Application pages (login, rooms, bookings, etc.)
│   │   ├── components/     # Reusable components (footer, cart-popover, etc.)
│   │   └── services/       # Angular services
│   ├── assets/             # Static assets
│   ├── environments/       # Environment configurations
│   └── theme/              # Ionic theme variables
├── backend/                # Backend source code
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
├── capacitor.config.ts     # Capacitor configuration
├── ionic.config.json       # Ionic configuration
└── angular.json            # Angular configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, please contact the development team or create an issue in the repository.
ankityadav1132004@gmail.com
