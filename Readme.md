
# EcoOnline - Store and Basket Demo Application

 This demo application implements a client-side basket purely for demonstration purposes. The basket state is maintained locally within the browser and is not synchronised with the server, meaning there may be inconsistencies between the client and any server-side representation of the basket.

 Maintaining full consistency would typically require a bi-directional synchronisation mechanism (e.g. via RESTful updates, WebSocket events, or polling) to ensure both client and server remain in sync. I considered such a mechanism to be beyond the scope of this demo, as my primary objective is to showcase Angular development skills, including component design, state management, and UI interaction patterns, as opposed to production standard persistence and real-time data handling.

## Getting Started

### Prerequisites
- NodeJs (v18 or later)
- Angular CLI (v17 or later)
- .Net SDK (v8.0 or later)

### Clone the repo
```bash 
git clone https://github.com/mad-vx/ecoonline-shop
cd ecoonline-shop
```
### Build and run the API
```bash 
cd EcoOnline.WebApi
dotnet build
dotnet run
```
### Build and run Angular UI
```bash 
cd EcoOnline-UI
npm install
ng serve
```
#### Note: The front end expects the API to be running on a hard coded port (5249). If your API is running on a different port then you will need to modify the following line in api-service.ts file and repeat the above steps to build the Angular app.
```bash 
private apiUrl = 'http://localhost:5249/api/';
```

### Open a browser using `http://localhost:4200`

### Running Tests
```bash 
cd EcoOnline.Tests
dotnet test
```

## Projects

### EcoOnline.WebApi
#### Implements the backend RESTful API layer using ASP.NET Core. It exposes endpoints for managing store data and basket operations.

### EcoOnline.Model
#### Contains the core domain models and data transfer objects (DTOs) shared across the application. For this demo, I’ve kept the in-memory data within the Model layer for simplicity. In production, I would introduce a persistence layer — e.g. EcoOnline.Data

### EcoOnline.Tests
#### Provides a suite of unit and integration tests for validating the behaviour of both the model and Web API layers.

### EcoOnline-UI
#### An Angular based front end application demonstrating responsive UI design and client-side state management. It includes a simple shopping experience with a basket feature (maintained locally).