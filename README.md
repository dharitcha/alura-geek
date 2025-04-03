# AluraGeek - Product Management Project

## Overview
AluraGeek was developed as part of the Frontend Challenge in the Alura and Oracle Next Education (ONE) program. The challenge required building a project from scratch based on a Figma design, implementing everything from HTML and CSS to advanced JavaScript functionalities.

## Features
- **REST API Simulation:** Uses `json-server` to mock an API.
- **CRUD Operations:** Supports GET, POST, and DELETE requests for managing products.
- **Dynamic Rendering:** Products are dynamically displayed on the page.
- **Event Handling:** Captures and processes form submissions.
- **Modern Layout:** Designed using Flexbox, Grid, and Media Queries.

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

## How It Works
### Adding Products
- Users can add new products using a form.
- Products are sent to the database via a POST request.
- A success message is displayed upon successful addition.

### Displaying Products
- The app fetches products from the database using a GET request.
- Products are rendered dynamically within the product list.
- If fetching fails, an error message is displayed.

### Deleting Products
- Each product has a delete icon.
- Clicking the icon removes the product from the database via a DELETE request.
- The UI updates immediately to reflect the changes.

## Installation and Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/alura-geek.git
   ```
2. Navigate to the project folder:
   ```sh
   cd alura-geek
   ```
3. Install `json-server` globally if not installed:
   ```sh
   npm install -g json-server
   ```
4. Start the mock server:
   ```sh
   json-server --watch db.json --port 3000
   ```
5. Open `index.html` in your browser.

## Future Improvements
- Implement authentication for secure product management.
- Enhance UI with animations and interactive elements.
- Expand functionality with PUT requests for product updates.

## Live Demo
You can access the live version here: **[AluraGeek on Vercel](https://your-live-demo-link.com)**

⚠ **Note:** The project requires local `json-server` setup for full functionality.

## License
This project is open-source and available under the MIT License.

