# Software Requirements Specification (SRS) for Hotel Management System

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to outline the requirements for the Hotel Management System, a modern web and mobile application built with Ionic Angular for the frontend and Node.js with Express and MongoDB for the backend. The system allows users to browse hotels, view rooms, make bookings, and manage their cart.

### 1.2 Scope
The Hotel Management System provides the following functionalities:
- User authentication (login)
- Hotel browsing with search and filtering
- Room management
- Booking system with calendar view
- Cart functionality for managing selected hotels
- Responsive design for cross-platform compatibility

The system includes a backend API for managing hotel data and a frontend application for user interaction.

### 1.3 Definitions, Acronyms, and Abbreviations
- SRS: Software Requirements Specification
- API: Application Programming Interface
- UI: User Interface
- UX: User Experience
- CRUD: Create, Read, Update, Delete
- JWT: JSON Web Token (for future authentication implementation)

### 1.4 References
- Ionic Framework Documentation: https://ionicframework.com/docs
- Angular Documentation: https://angular.io/docs
- Node.js Documentation: https://nodejs.org/en/docs/
- MongoDB Documentation: https://docs.mongodb.com/

### 1.5 Overview
The rest of this document describes the overall description, specific requirements, and supporting information for the Hotel Management System.

## 2. Overall Description

### 2.1 Product Perspective
The Hotel Management System is a standalone web and mobile application that interacts with a backend database to manage hotel information. It provides a user-friendly interface for customers to discover and book hotels, while offering administrative features for managing rooms and bookings.

The system consists of:
- Frontend: Ionic Angular application
- Backend: Node.js Express server
- Database: MongoDB

### 2.2 Product Functions
The major functions of the system include:
- User login and authentication
- Display list of available hotels
- Search and filter hotels by category and location
- View detailed hotel information
- Add hotels to cart
- View and manage bookings on a calendar
- Manage room availability
- Responsive design for various devices

### 2.3 User Characteristics
- **End Users (Customers)**: Individuals looking to book hotels. They expect an intuitive, mobile-friendly interface with search capabilities.
- **Administrators**: Staff managing hotel and room data. They require efficient tools for CRUD operations.
- **Technical Skills**: Basic computer literacy for customers; technical knowledge for administrators.

### 2.4 Constraints
- **Technical Constraints**:
  - Frontend must be built with Ionic Angular
  - Backend must use Node.js, Express, and MongoDB
  - Application must be responsive and work on mobile devices
- **Regulatory Constraints**:
  - Must comply with data protection regulations (e.g., GDPR)
- **Business Constraints**:
  - Initial version uses mock data; future versions will integrate with real APIs

### 2.5 Assumptions and Dependencies
- Users have internet access
- MongoDB is properly configured and accessible
- Node.js runtime is available on the server
- Ionic CLI is installed for development

## 3. Specific Requirements

### 3.1 External Interface Requirements

#### 3.1.1 User Interfaces
- **Login Page**: Form with email and password fields, show/hide password toggle, validation messages
- **Home Page**: Hero video section, search bar, category filters, hotel cards with images and details, cart button with badge
- **Hotel Detail Page**: Detailed view of selected hotel with description, amenities, and booking option
- **Rooms Page**: List of available rooms with booking functionality
- **Bookings Page**: Calendar view of bookings using FullCalendar
- **Cart Popover**: List of selected hotels with total price

#### 3.1.2 Hardware Interfaces
- Compatible with standard web browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices running iOS and Android via Capacitor

#### 3.1.3 Software Interfaces
- **Frontend-Backend Communication**: RESTful API calls using HTTP/HTTPS
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Placeholder for JWT implementation

#### 3.1.4 Communication Interfaces
- HTTP/HTTPS for API communication
- WebSocket for real-time updates (future enhancement)

### 3.2 Functional Requirements

#### 3.2.1 User Authentication
- **FR1**: The system shall provide a login form with email and password fields.
- **FR2**: The system shall validate email format and password length (minimum 6 characters).
- **FR3**: The system shall display appropriate error messages for invalid inputs.
- **FR4**: Upon successful login, the system shall navigate to the home page.

#### 3.2.2 Hotel Browsing
- **FR5**: The system shall display a list of hotels with images, names, locations, ratings, and prices.
- **FR6**: The system shall allow users to search hotels by name or location.
- **FR7**: The system shall provide category filters (Couple, Single, Professional, Family).
- **FR8**: The system shall update the hero video based on selected category.

#### 3.2.3 Hotel Details
- **FR9**: The system shall display detailed information for a selected hotel including description, amenities, and capacity.
- **FR10**: The system shall allow users to book a hotel from the detail page.

#### 3.2.4 Cart Management
- **FR11**: The system shall allow users to add hotels to a cart.
- **FR12**: The system shall display the number of items in the cart via a badge.
- **FR13**: The system shall show a popover with cart contents and total price.
- **FR14**: The system shall prevent duplicate hotel additions to the cart.

#### 3.2.5 Booking Management
- **FR15**: The system shall display bookings on a calendar using FullCalendar.
- **FR16**: The system shall show mock booking events on the calendar.

#### 3.2.6 Room Management
- **FR17**: The system shall display a list of rooms with availability status.
- **FR18**: The system shall allow booking of available rooms.
- **FR19**: The system shall show alerts for booking confirmations.

#### 3.2.7 Backend API
- **FR20**: The system shall provide a GET endpoint to retrieve all hotels.
- **FR21**: The system shall provide a POST endpoint to add new hotels.
- **FR22**: The system shall connect to MongoDB for data persistence.

### 3.3 Performance Requirements
- **PR1**: The application shall load the home page within 3 seconds on standard internet connections.
- **PR2**: Search results shall appear within 1 second of user input.
- **PR3**: API responses shall have a latency of less than 500ms.
- **PR4**: The application shall support up to 1000 concurrent users.

### 3.4 Design Constraints
- **DC1**: The frontend shall be built using Ionic Angular framework.
- **DC2**: The backend shall use Node.js with Express.js.
- **DC3**: The database shall be MongoDB with Mongoose.
- **DC4**: The application shall follow responsive design principles.
- **DC5**: Code shall follow Angular and TypeScript best practices.

### 3.5 Software System Attributes
- **Security**: Implement input validation and sanitization.
- **Reliability**: The system shall have 99% uptime.
- **Usability**: Intuitive UI with clear navigation and feedback.
- **Maintainability**: Modular code structure for easy updates.
- **Portability**: Cross-platform compatibility via Ionic.

### 3.6 Other Requirements
- **OR1**: The application shall be deployable on standard web servers and mobile app stores.
- **OR2**: The system shall support internationalization (future enhancement).
- **OR3**: Logging and error handling shall be implemented for debugging.

## 4. Appendices

### 4.1 Hotel Data Model
```javascript
{
  name: String,
  rating: Number,
  description: String,
  img: String,
  place: String,
  price: Number,
  category: String,
  freeWifi: Boolean,
  roomCapacity: Number
}
```

### 4.2 API Endpoints
- GET / - Health check
- GET /hotels - Retrieve all hotels
- POST /hotels - Add a new hotel

### 4.3 Technologies Used
- Frontend: Ionic 8.0.0, Angular 20.0.0, TypeScript 5.8.0
- Backend: Node.js, Express 5.1.0, MongoDB with Mongoose 8.18.1
- Other: Capacitor for mobile deployment, FullCalendar for booking display
