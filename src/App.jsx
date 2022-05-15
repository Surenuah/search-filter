import './app.css';
import {Clothes} from "./clothes";
import {useState} from "react";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="app">
      <input type="text" placeholder="Search..." className="search" onChange={e => setQuery(e.target.value)}/>
      <ul className="list">
          {Clothes.filter(user => user.first_name.toLowerCase().includes((query))).map((user) => (
              <li key={user.id} className='listItem'>{user.first_name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
