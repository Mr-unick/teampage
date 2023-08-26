import logo from './logo.svg';
import './App.css';
import Univercity from './components/univercity';
import Mentors from './components/mentors';
import Advisor from './components/advisor';

function App() {
  return (
    <div className="App">
      <h1>Team Page</h1>
      <h3>Learn from scientists, researchers, scholars from the top institutes in the world.</h3>
      <Univercity/>
      <h3>Meet Your Mentors</h3>
     <Mentors/>
     <Advisor/>
    </div>
  );
}

export default App;
