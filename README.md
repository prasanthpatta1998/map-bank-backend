# Bank Branch Distribution Mapping Backend

This is the backend component of the Bank Branch Distribution Mapping project. It provides APIs to retrieve bank branch information based on location and facilities.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- Search bank branches based on location and facilities.
- Provide data through API endpoints for integration with frontend applications.

## Getting Started

Follow these instructions to set up and run the backend server.

### Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd bank-branch-backend
### Usage

1. Start the backend server:

   node server.js
   The server will start and listen on the specified port (default is 5000).

2. The API endpoints are accessible at:

   http://localhost:3001/api/search?location=<location>
   Replace <location> with the desired location parameter.

## API Endpoints

   GET /api/search: Retrieve bank branches based on location.

  # Query Parameters:

        location (required): The location or facility to search for.
        Example: /api/search?location=ATM

  # Response Format:

        {
        "branches": [
            { "id": 1, "brand": "Bank A", "facilities": ["ATM", "Savings"] },
            { "id": 2, "brand": "Bank B", "facilities": ["ATM", "Loan"] }
            // More branches...
        ]
        }
## Technologies Used

    Node.js
    Express
    CORS middleware
## Contributing

    Contributions are welcome! If you find any issues or want to enhance the project, feel free to create a pull request.