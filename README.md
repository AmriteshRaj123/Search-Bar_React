# React Search Bar Project

This project implements a simple search bar component using React. Users can search for cities from a predefined list and view the matching results in real-time.

## Features

- Users can type in the search bar to filter the list of cities.
- The search is case-insensitive.
- Matching results are displayed in real-time as the user types.
- If no matching results are found, a message "No Results Found" is displayed.


## Explanation of Code

### App.js

```jsx
import './App.css';
import { useState } from 'react';

function App() {
  // State to hold the search query entered by the user
  const [search, setSearch] = useState("");

  // Array of cities
  const cities = ["Mumbai", "Delhi", "Bangalore (Bengaluru)", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata (Calcutta)", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Thane", "Bhopal", "Patna", "Vadodara (Baroda)", "Ghaziabad"];

  // Function to handle changes in the search input
  function handleChange(e) {
    setSearch(e.target.value);
  }

  // Filtering the array of cities based on the search query
  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  // If no matching results are found, display a message
  const displayCities = filteredCities.length ? filteredCities : ["No Results Found"];

  return (
    <div className="main">
      <div className="container">
        <label htmlFor="input">Search Bar:</label>
        <input
          type="text"
          placeholder="Search here..."
          id="input"
          onChange={handleChange}
        />
        <ul>
          {displayCities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
```

- **useState**: The `useState` hook is used to define the state variable `search`, which holds the current search query entered by the user.

- **handleChange**: This function is called whenever the input value changes. It updates the `search` state with the new value entered by the user.

- **filteredCities**: This variable holds the filtered array of cities based on the search query. It uses the `filter` method to check if each city includes the search query (case-insensitive).

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/AmriteshRaj123/Search-Bar_React.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## Built With

- React - A JavaScript library for building user interfaces
- CSS - For styling the application

## Author

Amritesh Raj


