# Photo Scheduler Backend

## Overview
The Photo Scheduler Backend is a Node.js application that provides an API for managing photo reservations. It utilizes Express.js for routing and Mongoose for interacting with a MongoDB database.

## Project Structure
```
photo-scheduler-backend
├── src
│   ├── controllers
│   │   └── index.ts
│   ├── routes
│   │   └── index.ts
│   ├── services
│   │   └── index.ts
│   ├── models
│   │   └── index.ts
│   ├── middlewares
│   │   └── index.ts
│   ├── utils
│   │   └── index.ts
│   ├── app.ts
│   └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd photo-scheduler-backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration
Create a `.env` file in the root directory and add your environment variables, such as the MongoDB connection string.

## Running the Application
To start the server, run:
```
npm start
```

## API Endpoints
The application provides the following API endpoints for managing reservations:
- `GET /api/reservations` - Retrieve all reservations
- `POST /api/reservations` - Create a new reservation
- `GET /api/reservations/:id` - Retrieve a reservation by ID
- `PUT /api/reservations/:id` - Update a reservation by ID
- `DELETE /api/reservations/:id` - Delete a reservation by ID

## Future Improvements
- Implement authentication middleware
- Add more detailed error handling
- Enhance API documentation

## License
This project is licensed under the MIT License.