
import './App.css';
import Weather from "./Weather";

export default function App() {
  let city= "Brooklyn";
  return (
    <div className="App">
      <header className="App-header">
       <h1>hello everyone from {city}!!!!</h1>
       <Weather city="New York"/>
     </header>
    </div>
  );
  
}


