import './App.css';
import Prop from './components/prop.js';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Oglebee Solutions, your trusted partner in drone services. 
          Our team is dedicated to providing high-quality drone solutions for various industries. 
          Whether it's aerial photography, surveying, or inspections, we have you covered.
        </p>
        <p>
          We are proud to announce that we are Part 107 certificated, ensuring that our operations 
          meet the highest safety and regulatory standards.
        </p>
        <p>
          Please bear with us as we continue to build and improve our website. 
         In the meantime, feel free to contact us for any inquiries or drone-related services.
        </p>
        <p>
          oglebee2023@gmail.com
        </p>
      </header>
    </div>
  );
}

export default App;
