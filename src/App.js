import './App.css';
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState("");

  const arr = ["Mumbai","Delhi","Bangalore (Bengaluru)","Hyderabad","Ahmedabad","Chennai","Kolkata(Calcutta)","Surat","Pune","Jaipur","Lucknow","Kanpur", "Nagpur","Visakhapatnam","Indore","Thane","Bhopal","Patna", "Vadodara(Baroda)","Ghaziabad"]
  function handleChange(e) {
    setSearch(e.target.value);
  }
  let filtered = arr.filter((item) => item.toLowerCase().includes(search.toLowerCase()));
  if (filtered.length === 0) {
    filtered = ["No Results Found"];
  }
  return (
    <div className="main">
      <div className='container'>
        <label htmlFor="input">Search Bar : </label>
        <input
          type="text"
          placeholder='Search here...'
          id="input"
          onChange={handleChange}
        />
        <ul>
          {filtered.map((element, ind) => (
            <li key={ind}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;